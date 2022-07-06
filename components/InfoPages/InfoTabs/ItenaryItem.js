import React from 'react';
import {
    View,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';

const ItenaryItem = ({ date , text , title }) => {
  return (
    <View style={styles.boxContainer}>
        <Text style={styles.textT}>Day {date}: {title}{'\n'}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    boxContainer: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa64d',
        height : 160,
        marginTop: 30,
        marginBottom: 60,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    textT: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ItenaryItem;