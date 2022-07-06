import React from 'react';
import { useState, useEffect } from 'react';
import BackgroundImage from '../../../assets/loginBG4.png';
import {Restart} from 'fiction-expo-restart';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Unorderedlist from 'react-native-unordered-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PurpleLogo from '../../../assets/purpleLogo.png';
import greyLogo from '../../../assets/greyLogo.png';
import { 
  Image, 
  ImageBackground, 
  StyleSheet, 
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Text, 
  Platform,
  View, 
  Linking,
  Keyboard,
} from 'react-native';

const SHome = ({navigation}) => {

  const clearData = async () => {
    try {
      await AsyncStorage.setItem(
        '@storage_Key',
        'reset'
      );
    } catch (error) {
      alert('error loggin out!');
    }
  };

  const logNav = async()=>{clearData();Restart();}

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
          <Text style={styles.seems}>It seems that your trip has ended,</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Itenary')}>
            <Text style={styles.upto}>See what you were up to{'\n'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.transindus.co.uk/enquiry/')}>
            <Text style={styles.upto}>Book another memorable trip with us{'\n'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity >
            <Text style={styles.kind}>We kindly ask that you help improve future holiday experiences by{'\n'}
            <Text style={styles.quick}>filling in our quick survey</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={logNav}>
            <Text style={styles.text}>Login Screen</Text>
          </TouchableOpacity> 

      </ImageBackground>      
      <View style={styles.titleContainer}><Image style={styles.title} source={greyLogo} /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    fontSize: 30,
  },
  seems: {
    flex: 1,
    color: '#ffffff',
    paddingTop: '15%',
    paddingLeft: '5%',
    fontSize: 40,
    textShadowColor: '#000000',
    textShadowRadius: 10,
    paddingBottom: '16%'
  },
  quick: {
    textDecorationLine: 'underline'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  upto: {
    textDecorationLine: 'underline',
    color: '#00e673',
    fontSize: 30,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 10
  },
  button: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 12,
    paddingHorizontal: 43,
    marginHorizontal: '22%',
    marginBottom: '5%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  kind: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: '20%',
    color: '#66ffcc'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderWidth: 10,
    borderTopWidth: 0, 
    borderBottomWidth: 0,
    borderColor: '#4d0019',
  },
  title: {
    borderRadius: 20,
    height: 55,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: '#222425',
  }
})

export default SHome