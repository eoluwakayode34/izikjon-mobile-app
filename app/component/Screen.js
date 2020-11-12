import React from 'react';
import Constant from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({chidren}) {
    return (
      <SafeAreaView>
          {children}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default Screen;