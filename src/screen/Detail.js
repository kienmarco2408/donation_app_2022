import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Comment from '../components/Comment';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import StatusView from '../components/StatusView';
import { Button } from 'react-native-paper';

const Detail = ({ route }) => {
  const { title } = route.params;
  const { hashtag } = route.params;
  const { peopledonate } = route.params;
  const { content1 } = route.params;
  const { imgPost1 } = route.params;
  const { content2 } = route.params;
  const { imgPost2 } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ marginBottom: '30%' }}>
        <View>
          <View>
            <View style={styles.header}>
              <View style={styles.titleHeader}>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  style={{ fontWeight: '700', color: '#6200EE' }}
                  onPress={() => navigation.goBack()}
                />
                <Text style={styles.textHeader}>Bài viết</Text>
              </View>
              <View
                style={{
                  height: 'auto',
                  width: 350,
                  marginTop: 41,
                  marginLeft: 20,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{title}</Text>
              </View>
              <View style={{ marginHorizontal: 20, marginTop: 6 }}>
                <Text
                  style={{ color: '#888C94', fontWeight: '600', fontSize: 14 }}
                >
                  {hashtag}
                </Text>
              </View>
              <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                <View>
                  <View
                    style={{
                      height: 82,
                      width: '100%',
                      backgroundColor: '#EBE5F7',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      borderRadius: 7,
                    }}
                  >
                    <View style={{ alignItems: 'center' }}>
                      <Ionicons name="heart-outline" size={20} />
                      <Text
                        style={{
                          height: 'auto',
                          width: 54,
                          fontSize: 12,
                          textAlign: 'center',
                          lineHeight: 14.06,
                          marginTop: 6,
                          width: 60,
                          height: 'auto',
                        }}
                      >
                        {peopledonate}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <FontAwesome name="commenting-o" size={20} />
                      <Text
                        style={{
                          height: 'auto',
                          width: 54,
                          fontSize: 12,
                          textAlign: 'center',
                          lineHeight: 14.06,
                          marginTop: 6,
                        }}
                      >
                        20 lượt bình luận
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <FontAwesome name="safari" size={20} />
                      <Text
                        style={{
                          height: 'auto',
                          width: 54,
                          fontSize: 12,
                          textAlign: 'center',
                          lineHeight: 14.06,
                          marginTop: 6,
                        }}
                      >
                        Bản đồ từ thiện
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('DetailDonation')}
                    >
                      <View>
                        <Button
                          mode="contained"
                          uppercase=""
                          contentStyle={{ height: 50, width: 124 }}
                          buttonColor="#6200EE"
                        >
                          <Text>Ủng hộ</Text>
                        </Button>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <View style={{ marginTop: 24 }}>
              <Image source={imgPost1} style={{ width: 336, height: 221 }} />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: '#757575', fontSize: 14 }}>{content1}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Image source={imgPost2} style={{ width: 336, height: 221 }} />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: '#757575', fontSize: 14 }}>{content2}</Text>
            </View>
          </View>
        </View>
        <View>
          <Comment />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 293,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 1,
  },
  titleHeader: {
    marginTop: 20,
    marginLeft: 18,
    flexDirection: 'row',
  },
  textHeader: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '700',
    color: '#6200EE',
  },
});

export default Detail;
