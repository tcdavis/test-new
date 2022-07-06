import React from 'react';
import HomeStackHandler from './HomeStackHandler';
import Login from './LoginPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStackHandler = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={'Home'}>   
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>   
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeStackHandler}/>
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default MainStackHandler;