import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';

export const ButtonNews = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      name: 'Tin tức mới',
    },
    {
      name: 'Sức khỏe',
    },
    {
      name: 'Pháp luật',
    },
    {
      name: 'Đời sống',
    },
    {
      name: 'Xã hội',
    },
    {
      name: 'Podcast',
    },
  ]);
  return (
    <View>
      <FlatList
        horizontal={true}
        data={news}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View style={{ marginLeft: 13 }}>
              <Button
                dark="outlined-tonal"
                color="white"
                uppercase=""
                style={styles.button_news}
                mode="outlined"
              >
                <Text style={styles.text}>{item.name}</Text>
              </Button>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  button_news: {
    width: 'auto',
    height: 40,
    backgroundColor: '#529A5C',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
  },
});
