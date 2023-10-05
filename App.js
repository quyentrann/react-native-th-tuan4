import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Hinh2 from './components/Hinh2';

export default function App() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="/" component={Hinh2} /> */}
    </Stack.Navigator>
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
