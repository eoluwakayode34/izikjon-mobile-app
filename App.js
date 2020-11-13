import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {createStackNavigator  } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from "@react-navigation/native"
import WelcomeScreen from './app/screens/WelcomeScreen'
import ResetPasswordScreen from './app/screens/ResetPasswordScreen'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import NavigationTheme from './app/assets/navigation/NavigationTheme';
import TransferButton from './app/assets/navigation/TransferButton'
import LoginNavigator from './app/assets/navigation/LoginNavigator'


const Tweet = () => (

  <View>
    <Text>Tweet</Text>
  </View>
)

const TweetDetails = () => (
  <View>
  <Text>Tweet Details</Text>
</View>
)

const Profile = () => (
  <View>
  <Text>Profile</Text>
</View>
)

const TradeNow = () => (
  <View>
  <Text>Profile</Text>
</View>
)

const Rate = () => (
  <View>
  <Text>Profile</Text>
</View>
)

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweet}/>
    <Stack.Screen name="TweetsDetails" component={TweetDetails}/>

  </Stack.Navigator>
)




export default function App() {
  return (

  <NavigationContainer theme={NavigationTheme}>
    <LoginNavigator/>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  }
})