

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#1565C0',
      activeBackgroundColor: '#eee',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: '#C5CAE9'
    }}
  >
    < Tab.Screen name='Home'
      options={{
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='home' size={size} color={color}/>
      }}
    component={HomeScreen}/>
    < Tab.Screen name='Wallet'
     options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='wallet' size={size} color={color}/>
    }} component={WalletScreen}/>
    < Tab.Screen 
    name='Trade Now'
    options={({navigation}) =>( {
      activeBackgroundColor: '#eee',
      inactiveBackgroundColor: '#eee',
      tabBarButton: () => <TransferButton onPress = {navigation.navigate('WelcomeScreen')}/> ,
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='sync' size={size} color={color}/>
    })}
     component={TradeNow}/>

    < Tab.Screen name='Rate' 
     options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='cellphone-text' size={size} color={color}/>
    }}component={RateScreen}/>
    < Tab.Screen name='Profile' 
     options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='account' size={size} color={color}/>
    }}component={ProfileScreen}/>


  </Tab.Navigator>
)