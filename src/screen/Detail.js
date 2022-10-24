import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import HeaderDetail from '../components/HeaderDetail';
import { useNavigation } from '@react-navigation/native';
import ContentDetail from '../components/ContentDetail';

const Detail = ({ route }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <View>
          <HeaderDetail />
        </View>
        <View>
          <ContentDetail />
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
