import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchbar}>
      <TextInput style={styles.input} />
      <Ionicons
        name="md-search-outline"
        size={24}
        color="grey"
        style={{ bottom: 3 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    width: '90%',
    height: 60,
    backgroundColor: '#F3F9FF',
    marginTop: 31,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    width: '90%',
  },
});

export default SearchBar;
