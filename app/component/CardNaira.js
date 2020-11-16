import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AppText from '../component/AppText'
import colors from '../config/color'

function CardNaira({image, name, balance, balanceName}) {
    return (
       <View style={styles.container}>
           <ImageBackground
           resizeMode='contain'
           style={styles.image}
            source={image}
           >
           <View style={styles.textContainer}>
                <AppText text={styles.title}>{name}</AppText>
                <View style={styles.priceContainer}>
                <AppText text={styles.price}>{balance}</AppText>
                <AppText text={styles.balanceType} >{balanceName}</AppText> 
                </View>
                            
           </View>
           </ImageBackground>        
       </View>
    );
}

const styles = StyleSheet.create({
    balanceType: {
        fontSize: 12,
        color: colors.white,
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: -10
    },
    container: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20

    },
    textContainer: {
        padding: 20
    },
    title: {
        fontSize: 14,
        color: colors.white,
        textAlign: 'left',
        letterSpacing: 1
    },
    price: {
        marginTop: 50,
        fontSize: 25,
        color: colors.white,
        textAlign: 'left'
    },
    priceContainer: {
        alignContent: 'center',
        alignItems: 'center'
    }
})
export default CardNaira; 