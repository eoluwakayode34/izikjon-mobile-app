import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { useFonts} from 'expo-font';
import { AppLoading } from 'expo';

function AppText({children, size, text}) {
    let [fontsLoaded] = useFonts({
        'font': require('../assets/fonts/Comfortaa-Regular.ttf'),
        'font-bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
    
      });
      if (!fontsLoaded) {
        return <AppLoading/>;
      }
      else{
        return (
            <Text style={[styles.text, {fontSize: size }, text]}>{children}</Text>
            );
      }
   
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginVertical: 5,
        color: '#757575',
        fontFamily: 'font',
        textAlign: "center",
      
    }
})

export default AppText;