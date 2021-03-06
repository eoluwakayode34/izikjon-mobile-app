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


import HomeScreen from './app/screens/HomeScreeen'
import ProfileScreen from './app/screens/ProfileScreen'
import RateScreen from './app/screens/RateScreen'
import WalletScreen from './app/screens/WalletScreen'




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

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#1565C0',
      activeBackgroundColor: '#eee',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: '#C5CAE9'
    }}
  >
    < Tab.Screen name='Home'
      options={{
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='home' size={size} color={color}/>
      }}
    component={HomeScreen}/>
    < Tab.Screen name='Wallet'
     options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='wallet' size={size} color={color}/>
    }} component={WalletScreen}/>
    < Tab.Screen 
    name='Trade Now'
    options={({navigation}) =>( {
      activeBackgroundColor: '#eee',
      inactiveBackgroundColor: '#eee',
      tabBarButton: () => <TransferButton onPress = {navigation.navigate('WelcomeScreen')}/> ,
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='sync' size={size} color={color}/>
    })}
     component={TradeNow}/>

    < Tab.Screen name='Rate' 
     options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='cellphone-text' size={size} color={color}/>
    }}component={RateScreen}/>
    < Tab.Screen name='Profile' 
     options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='account' size={size} color={color}/>
    }}component={ProfileScreen}/>


  </Tab.Navigator>
)


export default function App() {
  return (

  <NavigationContainer theme={NavigationTheme}>
    <TabNavigator/>
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