import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import HeaderHome from '../components/HeaderHome';
import { slideData } from '../data/slide';
import Carousel from '../components/Carousel';
import Slider from '../components/Slider';
import Location from '../components/Location';
import ButtonCategories from '../components/ButtonCategories';
import Categories from '../components/Categories';
import NewsHome from '../components/NewsHome';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <HeaderHome />
          </View>
          <View>
            <Carousel data={slideData} />
          </View>
          <View>
            <Location />
          </View>
          <View>
            <Categories />
          </View>
          <View>
            <NewsHome />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:'30%'
  },
});

export default Home;
