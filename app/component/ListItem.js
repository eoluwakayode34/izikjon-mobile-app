import React from 'react';
import { Image, View, StyleSheet, Text} from 'react-native';

function ListItem(props) {
    return (
       <View style={styles.listContainer} >
           <Image
            style={styles.image}
            source={require('../assets/mosh.jpg')}
           />
           <View style={styles.textContainer}>
               <Text style={styles.user }>Mosh Hamedani</Text>
               <Text style={styles.listText}>5 Listing</Text>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    listContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 40,
        paddingHorizontal: 20
    },
    textContainer: {
        paddingLeft: 20
    },
    user: {
        fontSize: 16
    },
    listText: {
        color: '#888'  
    }
})

export default ListItem;