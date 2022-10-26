import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import HeaderDonation from "../components/HeaderDonation";
import HistoryDonate from "../components/HistoryDonate";
import DonateList from "../components/DonateList";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const DetailDonation = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <HeaderDonation />
      </View>
      <View>
        <DonateList />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Donate")}>
        <View
          style={{ height: 50, width: 124, marginTop: 20, alignSelf: "center" }}
        >
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
  );
};

export default DetailDonation;
