import React from 'react';
import { useFonts} from 'expo-font';
import { AppLoading } from 'expo';
import { Text, StyleSheet } from 'react-native';


function PrimaryHeadingText({children, margin}) {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../assets/fonts/Comfortaa-Regular.ttf'),
        'font-bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
    
      });
      if (!fontsLoaded) {
        return <AppLoading/>;
      }
      else{
        return (
        <Text style={[styles.text, {marginTop: margin}]}>{children}</Text>
            );
      }
   
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'font-bold',
        fontSize: 32
    }
})
export default PrimaryHeadingText;