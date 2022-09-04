import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import t from "tailwind-rn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Here is my Dating App!! Lets hope it works!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
