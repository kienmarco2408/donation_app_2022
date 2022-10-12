import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import ListLocation from './ListLocation';
import { Entypo } from '@expo/vector-icons';

const Location = () => {
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
        <Text style={{ fontSize: 16 }}>Địa điểm thu gom gần bạn: </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={{ fontSize: 12 }}>
            Xem thêm <Entypo name="chevron-right" />
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginLeft: '8%',
          marginTop: 20,
        }}
      >
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'row' }}>
            <ListLocation />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Location;
