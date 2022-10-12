import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import ButtonCategories from './ButtonCategories';

const Categories = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 33,
          marginHorizontal: '8%',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 16 }}>Categories </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={{ fontSize: 12 }}>
            Xem thêm <Entypo name="chevron-right" />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: '8%',
          marginTop: 10,
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}
      >
        <ButtonCategories />
      </View>
    </View>
  );
};

export default Categories;
