import React from 'react';
import {  StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/color'


function LinkText({title, navigatorName}) {

    const navigation =  useNavigation()
    return (
      <TouchableOpacity
      style={styles.container}
      onPress={() => {navigation.navigate(navigatorName)} }>
           <Text style={styles.link}>{title}</Text>

      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
        container: {

          margin: 10
        },

        link: {
            color: colors.primary,

           
        }
})

export default LinkText;