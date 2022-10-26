import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderDonation = () => {
    const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={{ fontWeight: "700", color: "white" }}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.textHeader}>Chi tiết ủng hộ</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 141,
    backgroundColor: "#6200EE",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleHeader: {
    marginTop: 70,
    marginLeft: 18,
    flexDirection: "row",
  },
  textHeader: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
});
export default HeaderDonation;
