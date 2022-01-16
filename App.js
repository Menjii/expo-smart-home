import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Devices from './components/screens/devices';
import Connection from './components/screens/connection';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Devices" component={ Devices } />
        <Tab.Screen name="Connection" component={ Connection } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
