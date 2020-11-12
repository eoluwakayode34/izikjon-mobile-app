import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { AppLoading } from 'expo';
import colors from '../config/color'
import { useFonts} from 'expo-font';

function WelcomeScreen(props) {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Comfortaa-Regular.ttf'),
    'font-bold': require('../assets/fonts/Comfortaa-Bold.ttf'),

  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  else{
    return   (
      <View style={styles.background}>
         
          <View style={styles.buttonContainer}>
            <Image
            style={styles.logo}
            source={
              require('../assets/logo.png')
            }
            />
            <Text style={styles.logoText}>Izikjon</Text>
          </View>
 
          <Text style={styles.logoTagline}>...Grand Masters of Instant Payment</Text>
      </View>
   );
  }
    
  }


 const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center'
  },

  buttonContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'

  },

  logo: {
    width: 200,
    height: 257.41
  },

  logoText: {
    fontFamily: 'font-bold',
    color: colors.black,
    fontSize: 48,
    marginTop: 30
  },

  logoTagline: {
    fontFamily: 'Inter-Black',
    color: colors.primary,
    position: 'relative',
    top: -100,
  }


  
 })


 export default WelcomeScreen;

