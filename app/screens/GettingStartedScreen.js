import React, {useState} from 'react';
import { View ,StyleSheet, Text, StatusBar, Platform, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';

import AppText from '../component/AppText';
import Foreground from '../component/Foreground';
import PrimaryHeadingText from '../component/PrimaryHeadingText';
import FormInput from '../component/FormInput';
import AppButton from '../component/AppButton';

import {MaterialCommunityIcons} from '@expo/vector-icons'

function GettingStartedScreen(props) {
    const [isSelected, setSelection] = useState(false);

    return (
        <View>
            <Foreground image={require('../assets/user.png')}/>
            <View style={styles.closeButton}>
            <MaterialCommunityIcons name='close' size={20}/>
                        </View>
            <View style={{
                position: 'absolute',
                right: 20,
                top: 40
            }}>
            <AppText>Already have an account? Sign In</AppText>

            </View>
            
            <View style={styles.container} >
            <PrimaryHeadingText margin={50}>Getting Started</PrimaryHeadingText>
            <AppText>Create an Account to continue</AppText>

            <View style={styles.userInputContainer}>
            <FormInput  placeholderText="Username" icon='email-outline' size={20} />
            <FormInput  placeholderText="Password" icon='lock-outline' size={20} />
            <AppText>Forget your credentials ?</AppText>
            </View>
            
            <View style={styles.checkboxContainer}>
                <CheckBox
                     value={isSelected}
                     onValueChange={setSelection}
                     style={styles.checkbox}
                />
                <AppText>By Creating an account, you agree to our Terms and conditions</AppText>
            </View>

            <View style={styles.buttonContainer}>
            <AppButton title='Sign Up'/>
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
        marginVertical: 20,
    },


    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        paddingHorizontal: 30,
        alignContent: 'center',
        justifyContent: 'center'

      },


      buttonContainer: {
          width: '100%'
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
        top: 40,
        left: 20
      }
      

   
    
})

export default GettingStartedScreen;