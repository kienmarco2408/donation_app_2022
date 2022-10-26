import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const DetailLocation = ({ route }) => {
  const { title } = route.params;
  const { content } = route.params;
  const { img } = route.params;
  const { address } = route.params;
  const { number } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: '30%' }}>
      <View>
        <View style={styles.header}>
          <View style={styles.titleHeader}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={{ fontWeight: '700', color: 'white' }}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.textHeader}>Điểm từ thiện</Text>
          </View>
        </View>
        <View>
          <View>
            <View style={styles.header1}>
              <View style={styles.titleHeader1}></View>
              <View
                style={{
                  height: 'auto',
                  width: 350,
                  marginTop: 24,
                  marginLeft: 20,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{title}</Text>
              </View>
              <View style={{ marginHorizontal: 20, marginTop: 6 }}>
                <Text
                  style={{ color: '#888C94', fontWeight: '600', fontSize: 14 }}
                >
                  #giaoduc #hoancanh #hongheo #suckhoe
                </Text>
              </View>
              <View style={{ marginHorizontal: 20, marginTop: 24 }}>
                <Text>
                  <Text style={{ fontWeight: 'bold', color: '#431586' }}>
                    Địa chỉ:{' '}
                  </Text>
                  {address}
                </Text>
              </View>
              <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text>
                  <Text style={{ fontWeight: 'bold', color: '#431586' }}>
                    SĐT:{' '}
                  </Text>
                  {number}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  justifyContent: 'space-around',
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                  <View
                    style={{
                      height: 50,
                      width: 162,
                      marginTop: 20,
                      alignSelf: 'center',
                    }}
                  >
                    <Button
                      mode="contained"
                      uppercase=""
                      contentStyle={{ height: 50, width: 162 }}
                      buttonColor="#6200EE"
                    >
                      <Text>Chỉ Đường</Text>
                    </Button>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
                  <View
                    style={{
                      height: 50,
                      width: 162,
                      marginTop: 20,
                      alignSelf: 'center',
                    }}
                  >
                    <Button
                      mode="contained"
                      uppercase=""
                      contentStyle={{ height: 50, width: 162 }}
                      buttonColor="#6200EE"
                    >
                      <Text>Ủng hộ</Text>
                    </Button>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 20,
                marginBottom: 20,
              }}
            >
              <View style={{ marginTop: 24 }}>
                <Image source={img} style={{ width: 336, height: 221 }} />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text>{content}</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View
            style={{
              height: 50,
              width: '80%',
              marginTop: 20,
              alignSelf: 'center',
            }}
          >
            <Button
              mode="contained"
              uppercase=""
              contentStyle={{ height: 50, width: '100%' }}
              buttonColor="#6200EE"
            >
              <Text>Xem chi tiết</Text>
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 141,
    backgroundColor: '#6200EE',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleHeader: {
    marginTop: 70,
    marginLeft: 18,
    flexDirection: 'row',
  },
  textHeader: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  header1: {
    width: '100%',
    height: 240,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleHeader1: {
    marginLeft: 18,
    flexDirection: 'row',
  },
});

export default DetailLocation;
