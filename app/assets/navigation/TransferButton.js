import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function TransferButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>     
        <View style={styles.container}>
            <MaterialCommunityIcons name='sync' size={40} color='white' />
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1565C0',
        borderColor: '#eee',
        borderWidth: 7,
        borderRadius: 40,
        bottom: 20,
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TransferButton;