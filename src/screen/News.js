import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderNews from "../components/HeaderNews";
import { ButtonNews } from "../components/ButtonNews";
import CardNews_1 from "../components/CardNews_1";

const News = () => {
  return (
    <View style={{ marginBottom: "30%" }}>
      <ScrollView>
        <View>
          <HeaderNews />
        </View>
        <View style={{ marginLeft: "5%" }}>
          <View style={{ marginTop: 24, marginBottom: 13 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#529A5C" }}>
              Kết quả tìm kiếm
            </Text>
          </View>
          <ButtonNews />
        </View>
        <View style={{ marginHorizontal: "5%" }}>
          <CardNews_1 />
        </View>
        <View style={{ alignSelf: "center", marginTop: 22 }}>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#888C94" }}>
            Đã hết kết quả
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;
