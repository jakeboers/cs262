--8.1

-- 1. All games from most recent to least recent
SELECT *
FROM Game
ORDER BY time DESC;

-- 2. All games that from in last week
SELECT *
FROM Game
WHERE time > '2020-12-3';

-- 3. All players who don't have the name NULL
SELECT *
FROM Player
WHERE name IS NOT NULL;

-- 4. Player IDs for anyone with over 2000 score
SELECT playerID
FROM PlayerGame
WHERE score > 2000; 

-- 5. All players with gmail addresses
SELECT *
FROM Player
WHERE email LIKE '%gmail%'

-- 8.2
-- A. Scores of 'The King' games biggest to smallest. Oops it's all 0s sucks to be him
SELECT score
FROM PlayerGame, Player
WHERE Player.ID = PlayerGame.playerID
	AND Player.name = 'The King'
ORDER BY score DESC

-- B. Name of who wone the 6/28/2006 game
SELECT Player.name
FROM Player, Game, PlayerGame
WHERE Player.ID = playerID
	AND Game.ID = gameID
	AND Game.time = '2006-06-28 13:20:00'
ORDER BY score DESC
LIMIT 1;

--C. P1.ID < P2.ID is taking into account that different people can have the same name so it makes sure that both people are outputted without the same ID getting outputted twice
--D. When you want to check for duplicates