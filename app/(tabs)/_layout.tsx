import { Colors } from '@/constants/colors';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: Colors.navTint}}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})