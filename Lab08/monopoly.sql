--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Property;

-- Create the schema.
CREATE TABLE Game (
	ID SERIAL PRIMARY KEY,
	time timestamp
	);

CREATE TABLE Player (
	ID SERIAL PRIMARY KEY,
	email varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Property (
  ID integer PRIMARY KEY,
  name varchar(50) NOT NULL,
  spaceOnBoard integer NOT NULL
  ); 

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;

-- Add sample records.
INSERT INTO Game(time) VALUES ('2006-06-27 08:00:00');
INSERT INTO Game(time) VALUES ('2006-06-28 13:20:00');
INSERT INTO Game(time) VALUES ('2006-06-29 18:41:00');

INSERT INTO Player(email) VALUES ('me@calvin.edu');
INSERT INTO Player(email, name) VALUES ('king@gmail.edu', 'The King');
INSERT INTO Player(email, name) VALUES ('dog@gmail.edu', 'Dogbreath');

INSERT INTO Property VALUES(1, 'Reading Railroad', 5);
INSERT INTO Property VALUES(2, 'Electric Company', 12);
INSERT INTO Property VALUES(3, 'Pennsylvania Railroad', 15);
INSERT INTO Property VALUES(4, 'B&O Railroad', 25);
INSERT INTO Property VALUES(5, 'Waterworks', 28);
INSERT INTO Property VALUES(6, 'Short Line', 35);

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);

-- --8.1

-- -- 1. All games from most recent to least recent
-- SELECT *
-- FROM Game
-- ORDER BY time DESC;

-- -- 2. All games that from in last week
-- SELECT *
-- FROM Game
-- WHERE time > '2020-12-3';

-- -- 3. All players who don't have the name NULL
-- SELECT *
-- FROM Player
-- WHERE name IS NOT NULL;

-- -- 4. Player IDs for anyone with over 2000 score
-- SELECT playerID
-- FROM PlayerGame
-- WHERE score > 2000; 

-- -- 5. All players with gmail addresses
-- SELECT *
-- FROM Player
-- WHERE email LIKE '%gmail%'

-- -- 8.2
-- -- A. Scores of 'The King' games biggest to smallest. Oops it's all 0s sucks to be him
-- SELECT score
-- FROM PlayerGame, Player
-- WHERE Player.ID = PlayerGame.playerID
-- 	AND Player.name = 'The King'
-- ORDER BY score DESC

-- -- B. Name of who wone the 6/28/2006 game
-- SELECT Player.name
-- FROM Player, Game, PlayerGame
-- WHERE Player.ID = playerID
-- 	AND Game.ID = gameID
-- 	AND Game.time = '2006-06-28 13:20:00'
-- ORDER BY score DESC
-- LIMIT 1;

--C. P1.ID < P2.ID is taking into account that different people can have the same name so it makes sure that both people are outputted without the same ID getting outputted twice
--D. When you want to check for duplicates