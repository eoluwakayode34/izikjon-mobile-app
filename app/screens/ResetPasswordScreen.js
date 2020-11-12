import React, {useState} from 'react';
import { View ,StyleSheet, Text, StatusBar, Platform} from 'react-native';

import AppText from '../component/AppText';
import Foreground from '../component/Foreground';
import PrimaryHeadingText from '../component/PrimaryHeadingText';
import FormInput from '../component/FormInput';
import AppButton from '../component/AppButton';

import {MaterialCommunityIcons} from '@expo/vector-icons'

function ResetPasswordScreen(props) {
    const [isSelected, setSelection] = useState(false);

    return (
        <View>
            <Foreground image={require('../assets/unlock.png')}/>
            <View style={styles.closeButton}>
            <MaterialCommunityIcons name='close' size={20}/>
                        </View>
            
            <View style={styles.container} >
            <PrimaryHeadingText margin={50}>Password Reset</PrimaryHeadingText>
            <AppText>At least 8 characters, with letters and numbers</AppText>

            <View style={styles.userInputContainer}>
            <FormInput  placeholderText="Username" icon='lock-outline' size={20} />
            </View>
            
           

            <View style={styles.buttonContainer}>
            <AppButton title='Next'/>
            <View style={styles.checkboxContainer}>
             
             <AppText>By Creating an account, you agree to our Terms and conditions</AppText>
         </View>
            </View>
           




            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
      
    },

    userInputContainer: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        marginTop: 70
    },


    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        paddingHorizontal: 30,
        alignContent: 'center',
        justifyContent: 'center'

      },


      buttonContainer: {
          width: '100%',
          marginTop: 100
      },

    checkbox: {
        alignSelf: "flex-start",
      },
      closeButton:{
          width: 30,
          height: 30,
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        left: 20
      }
      

   
    
})

export default ResetPasswordScreen;