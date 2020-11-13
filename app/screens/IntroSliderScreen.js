import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import GettingStartedScreen from '../screens/GettingStartedScreen'
import AppIntroSlider from 'react-native-app-intro-slider';
import Constant from 'expo-constants';
import AppText from '../component/AppText'
import colors from '../config/color'
 
const slides = [
  {
    key: 1,
    text: 'Trade cryptocurrencies, convert to real cash and transfer to your bank instantly',
    image: require('../assets/3.png'),
    backgroundColor: '#59b2ab',
},
{
    key: 2,
    text: 'With Izikjon you are able to make instant and secure transactions  anytime.',
    image: require('../assets/1.png'),
    backgroundColor: '#febe29',
},
{
    key: 3,
    text: 'Izikjon makes it seamless to pay for utility bills.',
    backgroundColor: '#22bcb5',
    image: require('../assets/2.png'),
  }
];
 
export default class IntoSliderScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          showRealApp: false
        }
    }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
          <ImageBackground  resizeMode='contain' style={styles.containerBg} source={require('../assets/rect1.png')}>

            <Image resizeMode='contain' style={styles.image} source={item.image} />

        <AppText style={styles.text} text={styles.textProp}>{item.text}</AppText>
        </ImageBackground>

      </View>
    );
  }
  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return < GettingStartedScreen  />;
    } else {
      return <AppIntroSlider
       renderItem={this._renderItem}
        data={slides} 
        showSkipButton={true}       
        activeDotStyle={{backgroundColor: colors.white }}
        onSkip={this.on_Skip_slides}
         onDone={this._onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constant.statusBarHeight,
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    containerBg:{
        width: '100%',

        height: '100%',
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: -70
        
    }
    ,

    image: {
        marginTop: 40,
        width: '90%',
        marginBottom: 20
    },
    text: {
        color: colors.primary,
        textAlign: "center",
        marginHorizontal: 30,
        paddingTop: 50
    },
    textProp: {
        color: colors.primary,
        marginVertical: 20,
        marginHorizontal: 20
    }
})

