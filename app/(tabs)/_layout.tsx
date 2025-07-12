import { Colors } from '@/constants/colors';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.navTint,
        headerStyle: { backgroundColor: Colors.navBg },
        headerTintColor: Colors.text,
        tabBarStyle: { backgroundColor: Colors.navBg },
        sceneStyle: { backgroundColor: Colors.bg },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name='rally'
        options={{
          title: "Rally",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name='settings/index'
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
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