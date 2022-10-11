import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import HeaderHome from '../components/HeaderHome';
import { slideData } from '../data/slide';
import Carousel from '../components/Carousel';
import Slider from '../components/Slider';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderHome />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
