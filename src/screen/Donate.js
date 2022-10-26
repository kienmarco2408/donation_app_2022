import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Donate = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ marginBottom: "30%" }}>
        <View style={styles.titleHeader}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={{ fontWeight: "700", color: "#6200EE" }}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.textHeader}>Ủng hộ</Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 40,
              marginLeft: 24,
              fontSize: 18,
              fontWeight: "700",
              color: "#6200EE",
            }}
          >
            Số tiền
          </Text>
          <TextInput
            style={{
              width: "90%",
              height: 62,
              borderColor: "#6200EE",
              borderWidth: 1,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 11,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 26,
              marginLeft: 24,
              fontSize: 18,
              fontWeight: "700",
              color: "#6200EE",
            }}
          >
            Phương thức ủng hộ
          </Text>
          <View
            style={{
              width: "90%",
              height: 62,
              borderColor: "#6200EE",
              borderWidth: 1,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../storages/icon/momo.png")}
              style={{ marginVertical: 5, marginLeft: 16 }}
            />
            <Text style={{ marginLeft: 14, fontSize: 18, color: "#757575" }}>
              Ví Momo
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 62,
              borderColor: "#6200EE",
              borderWidth: 1,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../storages/icon/vnpay.png")}
              style={{ marginVertical: 5, marginLeft: 16 }}
            />
            <Text style={{ marginLeft: 14, fontSize: 18, color: "#757575" }}>
              Ví VNPay
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 62,
              borderColor: "#6200EE",
              borderWidth: 1,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../storages/icon/zalopay.png")}
              style={{ marginVertical: 5, marginLeft: 16 }}
            />
            <Text style={{ marginLeft: 14, fontSize: 18, color: "#757575" }}>
              Ví ZaloPay
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 62,
              borderColor: "#6200EE",
              borderWidth: 1,
              marginHorizontal: 20,
              borderRadius: 20,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../storages/icon/visa.png")}
              style={{ marginVertical: 5, marginLeft: 16 }}
            />
            <Text style={{ marginLeft: 14, fontSize: 18, color: "#757575" }}>
              Visa
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: 307,
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            <Button
              mode="contained"
              uppercase=""
              contentStyle={{ height: 50, width: 307 }}
              buttonColor="#6200EE"
            >
              <Text>Ủng hộ</Text>
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default Donate;
