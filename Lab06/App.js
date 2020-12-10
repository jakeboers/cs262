import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const searchQuery = "Christopher Paolini"
  const numResults = "13"

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${numResults}`)
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search: {searchQuery}</Text>
      <Text style={styles.results}>Showing top {numResults} results:</Text>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardContent}>{item.volumeInfo.title}, {item.volumeInfo.authors}, {item.volumeInfo.publishedDate}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 10,
  },
  header: {
    fontSize: 30,
    padding: 10,
  },
  results: {
    padding: 10,
    fontSize: 20,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});