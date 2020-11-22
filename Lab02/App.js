/* 
Jake Boers
Lab02
Age Program
*/



import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('*insert name here*')
  const [age, setAge] = useState(1)
  const [birthdays, setBirthdays] = useState([])
  var input = name
  var year = age
  //when the button is pushed increase age. Then check if the name is the same as it was before. If yes do nothing else reset the age to 0 and change the name to the new name.
  const clickHandler = () => {
    if(name != input){
      setName(input)
      setAge(1)
      setBirthdays([{oldAge: 1}])
    }else{
      setAge(year + 1);
      year = year + 1;
      setBirthdays(
        birthdays.concat({oldAge: year.toString()})
    );
      }
  }
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
      style={styles.text}
      placeholder='*insert name here*'
      onChangeText={(val) => input = val}/>
      <Text>{name} is {age} years old.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Birthday' onPress={clickHandler} />
      </View>
      <View style={styles.container}>
        <FlatList numColumns={1}
        keyExtractor={(item) => item.oldAge}
        data={birthdays}
        renderItem={({ item }) => (<Text style={styles.item}>{item.oldAge}</Text>)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 20
  },
  text:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item:{
    flex: 1,
    marginHorizontal: 150,
    padding: 5,
  }
});
