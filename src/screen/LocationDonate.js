import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CardLocation from '../components/CardLocation';
import { useNavigation } from '@react-navigation/native';

const LocationDonate = () => {
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
            <Text style={styles.textHeader}>Danh sách từ thiện</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 21 }}>
          <CardLocation />
        </View>
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
});

export default LocationDonate;
