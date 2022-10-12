import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ButtonCategories = () => {
  const keyword = [
    {
      id: 1,
      name: 'Lương thực',
    },
    {
      id: 2,
      name: 'Lương thực',
    },
    {
      id: 3,
      name: 'Xây cầu',
    },
    {
      id: 4,
      name: 'Xây trường',
    },
    {
      id: 5,
      name: 'Sức khỏe',
    },
    {
      id: 6,
      name: 'Cơ sở vật chất',
    },
    {
      id: 7,
      name: 'Câu lạc bộ',
    },
    {
      id: 8,
      name: 'Hộ nghèo',
    },
  ];
  return keyword.map((data, index) => {
    return (
      <View key={data.id}>
        <Text style={styles.topTimKiemText}>{data.name}</Text>
      </View>
    );
  });
};
const styles = StyleSheet.create({
  topTimKiemText: {
    fontSize: 16,
    marginVertical: 4,
    marginRight: 8,
    backgroundColor: '#529A5C',
    padding: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 4,
  },
});
export default ButtonCategories;
