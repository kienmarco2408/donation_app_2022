import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardLocation = () => {
  const navigation = useNavigation();
  const listlocation = [
    {
      id: 1,
      title:
        "Mơ ước vào giảng đường của nữ sinh nghèo có bố bại liệt, mẹ trầm cảm",
      img: require("../storages/imgs/list_location/img1.png"),
      andress: "Thôn Tân Quảng, xã Ea Kênh, huyện Krông Pắk, tỉnh Đắk Lắk",
      number: "0333401321",
    },
    {
      id: 2,
      title:
        "Mơ ước vào giảng đường của nữ sinh nghèo có bố bại liệt, mẹ trầm cảm",
      img: require("../storages/imgs/list_location/img1.png"),
      andress: "Thôn Tân Quảng, xã Ea Kênh, huyện Krông Pắk, tỉnh Đắk Lắk",
      number: "0333401321",
    },
    {
      id: 3,
      title:
        "Mơ ước vào giảng đường của nữ sinh nghèo có bố bại liệt, mẹ trầm cảm",
      img: require("../storages/imgs/list_location/img1.png"),
      andress: "Thôn Tân Quảng, xã Ea Kênh, huyện Krông Pắk, tỉnh Đắk Lắk",
      number: "0333401321",
    },
  ];
  return listlocation.map((data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() => navigation.navigate("DetailLocation")}
      >
        <View style={styles.cardView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.img} source={data.img} />
            <View style={styles.textView}>
              <Text style={styles.text}>{data.title}</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 5, marginVertical: 11 }}>
            <Text>
              <Text style={{ fontWeight: "bold", color: "#431586" }}>
                Địa chỉ:{" "}
              </Text>
              {data.andress}
            </Text>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text>
              <Text style={{ fontWeight: "bold", color: "#431586" }}>
                SĐT:{" "}
              </Text>
              {data.number}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  cardView: {
    height: 165,
    width: 336,
    backgroundColor: "#EBE5F7",
    marginBottom: 20,
    borderRadius: 9,
    shadowOpacity: 0.5,
  },
  textView: {
    height: 56,
    width: 199,
    marginLeft: 15,
  },
  img: {
    width: 79,
    height: 79,
    borderRadius: 9,
    marginLeft: 5,
    marginTop: 5,
  },
  text: {
    fontWeight: "bold",
    color: "#431586",
  },
});

export default CardLocation;
