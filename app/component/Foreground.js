import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/color'

function Foreground({image}) {
    return (
       <View style={styles.background}>
           <View style={styles.iconContainer}>
           <Image
           width='100%'
           height='100%'
           source={image} />
           </View>
          
       </View>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 150,
        backgroundColor: colors.lightPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        padding: 10,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '50%'
    }
})

export default Foreground;