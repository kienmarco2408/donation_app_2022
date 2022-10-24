import { View, Text, Image } from 'react-native';
import React from 'react';

const ContentDetail = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <Image source={require('../storages/imgs/list_location/img1.png')} />
        <Text>Thu Trinh luôn khát khao được tiếp tục học đại học.</Text>
      </View>
      <View>
        <Text>
          Thông qua sự giới thiệu và động viên từ lãnh đạo Hội Chữ thập đỏ huyện
          Krông Pắk (Đắk Lắk), nữ sinh Trần Thị Thu Trinh (18 tuổi, ngụ xã Ea
          Kênh, huyện Krông Pắk) có số điện thoại và mạnh dạn liên hệ báo Dân
          trí để ngỏ lời mong nhận được sự giúp đỡ.
        </Text>
      </View>
      <View>
        <Image source={require('../storages/imgs/list_location/img1.png')} />
        <Text>Thu Trinh luôn khát khao được tiếp tục học đại học.</Text>
      </View>
      <View>
        <Text>
          Thông qua sự giới thiệu và động viên từ lãnh đạo Hội Chữ thập đỏ huyện
          Krông Pắk (Đắk Lắk), nữ sinh Trần Thị Thu Trinh (18 tuổi, ngụ xã Ea
          Kênh, huyện Krông Pắk) có số điện thoại và mạnh dạn liên hệ báo Dân
          trí để ngỏ lời mong nhận được sự giúp đỡ.
        </Text>
      </View>
    </View>
  );
};

export default ContentDetail;
