import React from 'react';
import { View, StyleSheet } from 'react-native';


import Screen from '../component/Screen';
import AppText from '../component/AppText';
import CardNaira from '../component/CardNaira';
import CardBtc from '../component/CardBtc'

function HomeScreen(props) {
    return (
        <Screen>
            <View style={styles.cardContainer}>
            <CardNaira image={require('../assets/card.png')}
                name='JASON MARTINS' balance='N 207,050.00' balanceName='Wallet Balance'
                />
                <CardNaira image={require('../assets/card.png')}
                name='JASON MARTINS' balance='N 207,050.00' balanceName='Wallet Balance'
                />
              <CardBtc image={require('../assets/card.png')}
               name='JASON MARTINS' balance='2.16715498 BTC' balanceName='Bitcoin Balance'
            />
            

            </View>
                 
          

            <AppText>Services </AppText>
            <AppText>Trasactions </AppText>
            <AppText>Trasactions </AppText>


        </Screen>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        // flexDirection: 'row'
    }
})

export default HomeScreen;