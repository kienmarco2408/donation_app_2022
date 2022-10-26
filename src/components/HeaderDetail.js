import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import StatusView from "./StatusView";
import { useNavigation } from "@react-navigation/native";

const HeaderDetail = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={{ fontWeight: "700", color: "#6200EE" }}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.textHeader}>Bài viết</Text>
        </View>
        <View
          style={{ height: "auto", width: 350, marginTop: 41, marginLeft: 20 }}
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
        <View style={{ marginHorizontal: 20, marginTop: 15 }}>
          <StatusView />
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
    shadowOpacity: 1,
  },
  titleHeader: {
    marginTop: 20,
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

export default HeaderDetail;
