import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'eat food', key: '1'},
    {text: 'make a big plate of nachos', key: '2'},
    {text: 'rule the world', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length >3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('WHOOPSY BOOM', 'Todos need more than 3 characters bro', [
        {text: 'understood', onPress: (console.log('alert closed'))},
        {text: 'rephrase please', onPress: () => Alert.alert('Uh Oh', 'Ya need more than 3 letters. If you have three or less how will you remember?!', [
          {text: 'understood', onPress: (console.log('alert closed'))}])}
      ])
    }

    
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
})