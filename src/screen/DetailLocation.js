import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderDetailLocation from "../components/HeaderDetailLocation";
import { Button } from "react-native-paper";

const DetailLocation = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View>
        <View style={styles.header}>
          <View style={styles.titleHeader}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={{ fontWeight: "700", color: "white" }}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.textHeader}>Điểm từ thiện</Text>
          </View>
        </View>
        <View>
          <HeaderDetailLocation />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <View
            style={{
              height: 50,
              width: "80%",
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            <Button
              mode="contained"
              uppercase=""
              contentStyle={{ height: 50, width: "100%" }}
              buttonColor="#6200EE"
            >
              <Text>Xem chi tiết</Text>
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default DetailLocation;
