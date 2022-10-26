import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import StatusView from "./StatusView";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const HeaderDetailLocation = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleHeader}></View>
        <View
          style={{
            height: "auto",
            width: 350,
            marginTop: 24,
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Mơ ước vào giảng đường của nữ sinh nghèo có bố bại liệt, mẹ trầm cảm
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 6 }}>
          <Text style={{ color: "#888C94", fontWeight: "600", fontSize: 14 }}>
            #giaoduc #hoancanh #hongheo #suckhoe
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 24 }}>
          <Text>
            <Text style={{ fontWeight: "bold", color: "#431586" }}>
              Địa chỉ:{" "}
            </Text>
          </Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text>
            <Text style={{ fontWeight: "bold", color: "#431586" }}>SĐT: </Text>
          </Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text>
            <Text style={{ fontWeight: "bold", color: "#431586" }}>
              Có thể hỗ trợ về:{" "}
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 16,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
            <View
              style={{
                height: 50,
                width: 162,
                marginTop: 20,
                alignSelf: "center",
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
          <TouchableOpacity onPress={() => navigation.navigate("Donate")}>
            <View
              style={{
                height: 50,
                width: 162,
                marginTop: 20,
                alignSelf: "center",
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
          alignItems: "center",
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ marginTop: 24 }}>
          <Image source={require("../storages/imgs/list_location/img1.png")} />
          <Text>Thu Trinh luôn khát khao được tiếp tục học đại học.</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>
            Thông qua sự giới thiệu và động viên từ lãnh đạo Hội Chữ thập đỏ
            huyện Krông Pắk (Đắk Lắk), nữ sinh Trần Thị Thu Trinh (18 tuổi, ngụ
            xã Ea Kênh, huyện Krông Pắk) có số điện thoại và mạnh dạn liên hệ
            báo Dân trí để ngỏ lời mong nhận được sự giúp đỡ.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 293,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleHeader: {
    marginLeft: 18,
    flexDirection: "row",
  },
  textHeader: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: "700",
    color: "#6200EE",
  },
});

export default HeaderDetailLocation;
