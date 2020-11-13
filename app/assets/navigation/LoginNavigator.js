import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../../screens/WelcomeScreen'
import SignInScreen from '../../screens/SignInScreen'
import GettingStartedScreen from '../../screens/GettingStartedScreen'
import ResetPasswordScreen from '../../screens/ResetPasswordScreen'
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen'
import IntoSliderScreen from '../../screens/IntroSliderScreen'

    const Stack = createStackNavigator();
    const LoginNavigator = () => {

        return(
            <Stack.Navigator initialRouteName='WelcomeScreen'
            
           >
            <Stack.Screen name='Welcome' 
            options={{
                headerShown: false
            }}
            component={WelcomeScreen}/>

            <Stack.Screen name='IntoSliderScreen' 
            options={{
                headerShown: false
            }}
            component={IntoSliderScreen}/>


            <Stack.Screen name='GettingStarted'
            options={{
                headerShown: false
            }}
            component={GettingStartedScreen}/>


            <Stack.Screen name='SignIn' 
            options={{
                headerShown: false
            }}
            component={SignInScreen}/>

            <Stack.Screen name='ResetPassword' 
            options={{headerShown: false}}
            component={ResetPasswordScreen}/>
            
            <Stack.Screen name='ForgotPassword' 
            options={{
                headerShown: false
            }}
            component={ForgotPasswordScreen}/>



        </Stack.Navigator>
        )
        
    }


export default LoginNavigator;