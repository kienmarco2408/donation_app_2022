import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const HeaderProfile = () => {
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
            <Text style={styles.textProfile}>Chào Khải</Text>
            <Text style={styles.textAddress}>Đống Đa, Hà Nội, Việt Nam</Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: '6%',
            marginTop: 35,
            flexDirection: 'row',
          }}
        >
          <Text style={{ color: 'white', lineHeight: 16.41, marginRight: 110 }}>
            <Text style={{ fontWeight: '700' }}>03 lần</Text> ủng hộ
          </Text>
          <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '700' }}>1.600.000vnd</Text> đóng góp
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 198,
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
export default HeaderProfile;
