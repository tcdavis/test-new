import React from 'react';
import {
    Text,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

const HotelTab = ({ name,nights,room,state }) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.text5}>You are staying at {'\n'} {name}</Text>
      <Text style={styles.text5}>For {nights} nights</Text>
      <Text style={styles.text5}>In room {room}</Text>
      <Text style={styles.text5}>{state}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#993333',
      height : '100%',
      marginTop: 20,
      marginBottom: 10,
      borderWidth: 5,
  },
  text5: {
      color: '#999900',
      marginBottom: 10,
      fontSize: 24,
      textAlign: 'center',
      alignItems: 'center'
  },
  text1: {
      alignSelf: 'flex-start',
      fontSize: 17,
      color: 'lightblue',
      marginLeft: '6%',
  },
  text4:{
      alignSelf: 'center',
      fontSize: 18,
      color: 'lightblue', 
  },
  text3:{
      alignSelf: 'flex-end',
      fontSize: 20,
      color: '#ff8080',
      marginRight: '8%',
  }
})

export default HotelTab;