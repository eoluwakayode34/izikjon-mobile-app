import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import { useFonts} from 'expo-font';
import { AppLoading } from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function FormInput({placeholderText, icon, size}) {

    let [fontsLoaded] = useFonts({
        'font': require('../assets/fonts/Comfortaa-Regular.ttf'),
        'font-bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
    
      });
      if (!fontsLoaded) {
        return <AppLoading/>;
      }
      else
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={size}/>}
           < TextInput style={styles.input} placeholder={placeholderText}   />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EEEEEE',
        width: '100%',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 9,
        alignItems: 'center',
        paddingHorizontal: 13,
        marginVertical: 20
    },
    icon:{
        marginRight: 10
    },
    input: {
       fontSize:16,
        fontFamily: 'font',
        width: '100%'
    }
})

export default FormInput