import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import RootStack from "./src/routes/Stack";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="auto" />
      <RootStack />
    </SafeAreaView>
  );
}
