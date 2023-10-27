import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
       screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='productdetails' component={ProductDetails}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Main