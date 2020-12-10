import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{ route.params.name }</Text>
                <Text style={globalStyles.paragraph}>{ route.params.email }</Text>
                <Text style={globalStyles.titleText}>{ route.params.id }</Text>
            </Card>
        </View>
    );
}
