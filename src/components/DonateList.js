import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const history = [
  {
    id: 1,
    time: "01/10/22",
    situation: "thanhtu22",
    money: "200.000 vnd",
  },
  {
    id: 2,
    time: "02/10/22",
    situation: "nguyenthao",
    money: "400.000 vnd",
  },
  {
    id: 3,
    time: "03/10/22",
    situation: "dungduong21",
    money: "1.000.000 vnd",
  },
];

const DonateList = () => {
  const item = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <View style={{ width: 120 }}>
          <Text style={{ fontWeight: "600", color: "#757575" }}>
            {item.time}
          </Text>
        </View>
        <View style={{ width: 150 }}>
          <Text style={{ fontWeight: "600", color: "#757575" }}>
            {item.situation}
          </Text>
        </View>
        <View style={{ width: 120 }}>
          <Text style={{ fontWeight: "600", color: "#757575" }}>
            {item.money}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
        marginLeft: "5%",
      }}
    >
      <View style={{ flexDirection: "row", marginBottom: 18 }}>
        <View style={{ width: 120 }}>
          <Text style={{ fontWeight: "700", fontSize: 18, color: "#757575" }}>
            Thời gian
          </Text>
        </View>
        <View style={{ width: 150 }}>
          <Text style={{ fontWeight: "700", fontSize: 18, color: "#757575" }}>
            Người gửi
          </Text>
        </View>
        <View style={{ width: 120 }}>
          <Text style={{ fontWeight: "700", fontSize: 18, color: "#757575" }}>
            Số tiền
          </Text>
        </View>
      </View>
      <FlatList
        data={history}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DonateList;
