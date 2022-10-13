import { View, Text } from 'react-native';
import React from 'react';
import HeaderDetail from '../components/HeaderDetail';
import { useNavigation } from '@react-navigation/native';

const Detail = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <HeaderDetail />
      </View>
    </View>
  );
};

export default Detail;
