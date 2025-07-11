import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/colors'

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: Colors.navTint}}
    >
      <Tabs.Screen />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})