import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import ListItem from '../component/ListItem'
import colors from '../config/color'
function ListingDetailScreen(props) {
    return (
        <View>
            <Image 
            style={styles.image}
            source={require('../assets/jacket.jpg')}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Red Jacket for sale</Text>
                <Text style={styles.subtitle}>$100</Text>
            </View>         
            
            <ListItem />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
    },
    subtitle: {
        fontSize: 18,
        color: colors.secondary
    },
    textContainer:{
        paddingHorizontal: 20
    },

    title: {
        fontSize: 20,
        marginVertical: 5,
        marginTop: 10
    },


    
})

export default ListingDetailScreen;