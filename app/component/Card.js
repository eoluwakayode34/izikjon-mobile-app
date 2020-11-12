import React from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';

import colors from '../config/color'

function Card({image}) {
    return (
       <View style={styles.container}>
           <Image
           style={styles.image}
            source={image}
           />
           <View style={styles.textContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.subtitle}>$100</Text>
           </View>        
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    textContainer: {
        padding: 20
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 5
    }
})
export default Card; 