import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../config/color'
function AppButton({title, color = 'primary', textColor = 'white'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]          
        }]}>
           <Text style={[styles.buttonColor, {color: textColor          
        }]}>{title}</Text> 
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 8
    },
    buttonColor: {
        color: colors.white,
        fontSize: 16,
    }
})

export default AppButton;