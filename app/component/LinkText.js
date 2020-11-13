import React from 'react';
import {  StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/color'


function LinkText({title, navigatorName}) {

    const navigation =  useNavigation()
    return (
      <TouchableOpacity
      onPress={() => {navigation.navigate('SignIn')} }>
           <Text style={styles.link}>{title}</Text>

      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({


        link: {
            color: colors.primary,
           
        }
})

export default LinkText;