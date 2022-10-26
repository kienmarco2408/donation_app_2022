import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ListLocation = () => {
  const navigation = useNavigation();
  const list_maps = [
    {
      id: 1,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750',
      img: require('../storages/imgs/list_maps/loca1.png'),
    },
    {
      id: 2,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750',
      img: require('../storages/imgs/list_maps/loca1.png'),
    },
    {
      id: 3,
      title: 'Yên Hòa Sunshine',
      time: '5 phút',
      distance: '750',
      img: require('../storages/imgs/list_maps/loca1.png'),
    },
  ];
  return list_maps.map((data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() => navigation.navigate('Maps')}
      >
        <View
          style={{
            width: 251,
            height: 100,
            backgroundColor: '#F1F5E8',
            borderRadius: 20,
            marginRight: 12,

            flexDirection: 'row',
          }}
        >
          <View>
            <Image source={data.img} />
          </View>
          <View style={{ marginTop: 31, marginLeft: 12 }}>
            <Text>
              {data.distance} | {data.time}
            </Text>
            <Text>{data.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default ListLocation;
