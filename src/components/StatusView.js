import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const StatusView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          height: 82,
          width: "100%",
          backgroundColor: "#EBE5F7",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 7,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Ionicons name="heart-outline" size={20} />
          <Text
            style={{
              height: "auto",
              width: 54,
              fontSize: 12,
              textAlign: "center",
              lineHeight: 14.06,
              marginTop: 6,
              width: 60,
              height: "auto",
            }}
          >
            03 người đã ủng hộ
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FontAwesome name="commenting-o" size={20} />
          <Text
            style={{
              height: "auto",
              width: 54,
              fontSize: 12,
              textAlign: "center",
              lineHeight: 14.06,
              marginTop: 6,
            }}
          >
            20 lượt bình luận
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FontAwesome name="safari" size={20} />
          <Text
            style={{
              height: "auto",
              width: 54,
              fontSize: 12,
              textAlign: "center",
              lineHeight: 14.06,
              marginTop: 6,
            }}
          >
            Bản đồ từ thiện
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("DetailDonation")}>
          <View>
            <Button
              mode="contained"
              uppercase=""
              contentStyle={{ height: 50, width: 124 }}
              buttonColor="#6200EE"
            >
              <Text>Ủng hộ</Text>
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StatusView;
