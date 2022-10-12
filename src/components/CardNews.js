import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const CardNews = () => {
  const navigation = useNavigation();
  const list = [
    {
      id: 1,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '03 người đã ủng hộ',
    },
    {
      id: 2,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '03 người đã ủng hộ',
    },
    {
      id: 3,
      img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
      title: 'Thông tin về rối loạn phổ tự kỷ',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '03 người đã ủng hộ',
    },
  ];
  return list.map((data, index) => {
    return (
      <View style={{ marginTop: 17 }} key={data.id}>
        <View style={styles.resultBox}>
          <TouchableOpacity onPress={() => navigation.push('CourseDetail')}>
            <Image
              style={styles.resultImage}
              source={{
                uri: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
              }}
            />
          </TouchableOpacity>

          <View style={styles.resultTextBox}>
            <TouchableOpacity
              onPress={() => navigation.push('CourseDetail')}
              style={{ flexDirection: 'row' }}
            >
              <Text style={styles.resultText}>{data.title}</Text>
              <View style={{ marginLeft: 10 }}>
                <FontAwesome name="bookmark-o" size={28} color="#447DB9" />
              </View>
            </TouchableOpacity>
            <View style={{ marginLeft: 15 }}>
              <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 12 }}>{data.hashtag}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontSize: 12 }}>{data.peopledonate}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  });
};
const styles = StyleSheet.create({
  resultBox: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  resultImage: {
    height: 118,
    width: 118,
    borderRadius: 10,
  },
  resultTextBox: {
    width: '70%',
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  resultText: {
    marginLeft: 15,
    width: '75%',
    fontSize: 16,
    flexWrap: 'wrap',
  },
});

export default CardNews;
