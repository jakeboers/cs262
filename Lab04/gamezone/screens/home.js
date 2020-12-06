import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Pokey Mans', rating: 3.5, body: 'I thought this was a knockoff Pokemon. Turns out it is just a game where you poke a man. Still fun though.', key: '1'},
        { title: 'Mario Bros', rating: 5, body: 'I do love me some good Maro and his little brother Loogie!', key: '2'},
        { title: 'Wii Sports', rating: 10000, body: 'BEST GAME EVER MADE!!! THIS IS THE ONLY GAME THAT TRUE GAMERS PLAY!! GET ON MY LEVEL!!!!!!!!', key: '3'},
    ]);


    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}


