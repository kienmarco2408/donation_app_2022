import { View, Text } from 'react-native';
import React from 'react';
import HeaderProfile from '../components/HeaderProfile';
import HistoryDonate from '../components/HistoryDonate';

const Profile = () => {
  return (
    <View>
      <View>
        <HeaderProfile />
      </View>
      <View>
        <HistoryDonate />
      </View>
    </View>
  );
};

export default Profile;
