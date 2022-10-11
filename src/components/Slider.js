import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageStore,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';

const imgs = [
  'https://www.plasticstoday.com/sites/plasticstoday.com/files/plastic-bottle-recycling-chones-Adobe-1540X800.jpg',
  'https://polycoplastic.com/wp-content/uploads/2021/03/nhua-pet-la-gi.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVqiU613ku9R5OSpbuhaLbgRCMLM_p7sWUw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2EPxevYnvVJCvdWI8JuK1nvMtXrAfp90rg&usqp=CAU',
];

const Slider = () => {
  const [imgActive, setimgActive] = useState(0);
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.wrap}>
      <ScrollView
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal={true}
      >
        {imgs.map((i, index) => (
          <Image
            key={i}
            resizeMode="stretch"
            style={styles.wrap}
            source={{ uri: i }}
          />
        ))}
      </ScrollView>
      <View style={styles.wrapDot}>
        {imgs.map((e, index) => (
          <Text
            key={e}
            style={imgActive == index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: 330,
    height: 270,
    borderRadius: 20,
    alignSelf: 'center',
  },
  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});

export default Slider;
