import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import Slider from './Slider';
import Carousel from './Carousel';
import { slideData } from '../data/slide';

const HeaderHome = () => {
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{ flexDirection: 'row', marginTop: 65, alignItems: 'center' }}
        >
          <TouchableOpacity style={{ marginLeft: '8%' }}>
            <View>
              <Image
                source={require('../storages/imgs/avt.jpg')}
                style={styles.avt}
              />
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 5, width: 176 }}>
            <Text style={styles.textProfile}>Chào Gia Huy</Text>
            <Text style={styles.textAddress}>Đống Đa, Hà Nội, Việt Nam</Text>
          </View>
        </View>
        <View>
          <SearchBar />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Hoàn cảnh ưa tiên</Text>
        </View>
        <View>
          <Carousel data={slideData} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 295,
    backgroundColor: '#6200EE',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textAddress: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: -0.32,
    color: 'white',
  },
  textProfile: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: -0.32,
    color: 'white',
  },
  avt: { width: 41, height: 41, borderRadius: 60 },
  title: {
    color: 'white',
    fontSize: 18,
    lineHeight: 21.09,
  },
  titleView: {
    marginTop: 21,
    marginLeft: '8%',
  },
});

export default HeaderHome;
