import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Comment = () => {
  return (
    <View
      style={{
        backgroundColor: "#EBE5F7",
        width: "100%",
        height: "auto",
        paddingBottom: 20,
      }}
    >
      <View style={{ marginTop: 16, marginHorizontal: 20, marginBottom: 6 }}>
        <Text>Bình luận</Text>
      </View>
      <View
        style={{
          marginTop: 8,
          marginHorizontal: 20,
          marginBottom: 6,
          backgroundColor: "white",
          height: 170,
          borderRadius: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../storages/imgs/avt.jpg")}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
                marginRight: 16,
              }}
            />
            <Text>Name</Text>
          </View>
          <View>
            <Text>1 month</Text>
          </View>
        </View>
        <View>
          <Text style={{ marginHorizontal: 20, marginTop: 16 }}>
            Thỉnh thoảng mình vẫn làm thiện nguyện có chút ít ủng hộ tương lai e
            của ít lòng nhiều mong mn giúp đỡ em ấy!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="heart-outline"
              style={{ marginRight: 9 }}
              size={20}
            />
            <Text>02</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="share" style={{ marginRight: 5 }} size={20} />
            <Text>Trả lời</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comment;
