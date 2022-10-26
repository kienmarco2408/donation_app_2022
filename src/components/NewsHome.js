import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import CardNews from "./CardNews";
import { useNavigation } from "@react-navigation/native";

const NewsHome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 33,
          marginHorizontal: "8%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>Gợi ý </Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Text style={{ fontSize: 12 }}>
            Xem thêm{" "}
            <Entypo
              name="chevron-right"
              onPress={() => navigation.navigate("News Stack")}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: "6%" }}>
        <CardNews />
      </View>
    </View>
  );
};

export default NewsHome;
