import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RootStack from './src/routes/Stack';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="auto" />
      <RootStack />
    </SafeAreaView>
  );
}
