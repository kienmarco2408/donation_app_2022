import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderDetail from "../components/HeaderDetail";
import { useNavigation } from "@react-navigation/native";
import ContentDetail from "../components/ContentDetail";
import Comment from "../components/Comment";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ marginBottom: "30%" }}>
        <View>
          <HeaderDetail />
        </View>
        <View>
          <ContentDetail />
        </View>
        <View>
          <Comment />
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
