import React from 'react';
import {
    Text,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

const FlightTab = ({ kid,home,away,depart,arrive,seats,date }) => {
  return (
    <View style={styles.boxContainer}>
        <Text style={styles.textID}>Flight {kid}</Text>
        <Text style={styles.text4}>From {home}</Text>
        <Text style={styles.text4}>To {away}{'\n'}</Text>
        <Text style={styles.text1}>On {date}, {depart} Local Time</Text>
        <Text style={styles.text1}>Arriving at {arrive} Local Time</Text>
        <Text style={styles.text3}>{'\t\n'}Your seats are: {seats}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    boxContainer: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#888980',
        height : '50%',
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 5,
    },
    textID: {
        color: '#e6ac00',
        marginBottom: 10,
        fontSize: 24
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

export default FlightTab;