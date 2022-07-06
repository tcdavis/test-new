import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NHome from './NHome';
import FlightInfo from '../../InfoPages/FlightInfo';
import HotelInfo from '../../InfoPages/HotelInfo';
import LogOut from '../../MainPages/LoginPage';
import {Restart} from 'fiction-expo-restart';
import Comms from '../../MainPages/Comms';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const NTab = createBottomTabNavigator();

const OnFlightHome = ({ rel,hours,mins,name }) => {
  return (
    <NTab.Navigator 
       initialRouteName={'NHome'}
       backBehavior='initialRoute'
       screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {backgroundColor: '#660033',},
      }} >
      <NTab.Screen 
        name="Comms"
        component={Comms}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign
              name="message1"
              size={40}
              color={color}
            />
          ), 
        }}
      />
      <NTab.Screen 
        name="NHome" 
       //initialParams={{'mins': mins }}
        options={{
          tabBarIcon: ({color}) => (
          <Ionicons
            name="information-circle-outline"
            size={50}
            color={color}
          />), 
        }}
      >{props => <NHome {...props} name={name} hours={hours} mins={mins} />}
      </NTab.Screen>
      <NTab.Screen 
        name="Your Flight Information"
        component={FlightInfo}
        inactiveColor='red'
        activeColor='blue'
        options={{
          headerStyle: {
            backgroundColor: '#660033',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerShown: "true",
          tabBarIcon: ({color}) => (
            <MaterialIcons 
              name="flight"
              size={40}
              color={color}
            />
          ),
        }}
      />
      <NTab.Screen 
        name="Your Accomodation Information"
        component={HotelInfo}
        options={{
          headerStyle: {
            backgroundColor: '#660033',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerShown: "true",
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="hotel"
              size={40}
              color={color}
            />
          ),
        }}
      />
    </NTab.Navigator>
  )
}

export default OnFlightHome;