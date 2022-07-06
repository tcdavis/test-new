import React from 'react';
import BackgroundImage from '../../assets/loginBG4.png';
import {
    View,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import ItenaryItem from './InfoTabs/ItenaryItem';

const itenaryData = 
  [
    ['1',"Settle in","Arrive at 6:45 PM at the international airport. Meet your taxi driver from India Taxi Company and settle in at the Rajasthan Hotel."],
    ['2',"Anything","You can wander about, feel free to take a stroll in the village, and eat at KFC: a very exotic and cultural restaurant."],
    ['3',"Do that","Lorem ipsum dolor si ame, conseceur adipiscing eli. Duis sed sapien si ame eli laoree lucus loboris a lacus. Fusce varius era ac era dicum mais. Donec quis ipsum a eros maximus lucus."],
    ['4',"Go here","Nunc ac massa laoree eli sagiis viverra non vel dolor. Quisque odio augue, egesas ac finibus a, elemenum eu libero. Mauris eu faucibus juso, quis pellenesque meus."],
    ['5',"Go there","Ineger vel gravida felis. Nulla fringilla u juso a gravida. Fusce ac dicum leo. Fusce id sagiis eli. In u convallis neque. Duis mais, nibh a dicum finibus, nisl eli pharera mi, vel ulrices mauris sapien viae ligula."],
    ['6',"See that","Lorem ipsum dolor si ame, conseceur adipiscing eli. Duis sed sapien si ame eli laoree lucus loboris a lacus. Fusce varius era ac era dicum mais. Donec quis ipsum a eros maximus lucus."],
    ['7',"See this","Vesibulum mollis dolor a cursus molesie. Maecenas purus quam, pharera eu facilisis id, porior a ane. Praesen vel ex eu oror faucibus facilisis. Donec incidun a odio ornare laoree."],
    ['8',"Complete the Survey","Nunc ac massa laoree eli sagiis viverra non vel dolor. Quisque odio augue, egesas ac finibus a, elemenum eu libero. Mauris eu faucibus juso, quis pellenesque meus."],
    ['9',"Anything","Lorem ipsum dolor si ame, conseceur adipiscing eli. Duis sed sapien si ame eli laoree lucus loboris a lacus. Fusce varius era ac era dicum mais. Donec quis ipsum a eros maximus lucus."],
    ['10',"Do something","Vesibulum mollis dolor a cursus molesie. Maecenas purus quam, pharera eu facilisis id, porior a ane. Praesen vel ex eu oror faucibus facilisis. Donec incidun a odio ornare laoree."],
    ['11',"Do something","Nunc ac massa laoree eli sagiis viverra non vel dolor. Quisque odio augue, egesas ac finibus a, elemenum eu libero. Mauris eu faucibus juso, quis pellenesque meus."],
    ['12',"Watch the Sunset","Ineger vel gravida felis. Nulla fringilla u juso a gravida. Fusce ac dicum leo. Fusce id sagiis eli. In u convallis neque. Duis mais, nibh a dicum finibus, nisl eli pharera mi, vel ulrices mauris sapien viae ligula."],
  ]

const Itenary = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
    <ImageBackground style={styles.background} source={BackgroundImage}>
      { itenaryData.map(item => {
        return(
          <ItenaryItem key={item[0]} date={item[0]} title={item[1]} text={item[2]} />
        )})
      }
      <Text style={styles.tailor2}>Tailor Made by Transindus</Text>
    </ImageBackground>        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderWidth: 10,
    borderTopWidth: 0, 
    borderColor: '#4d0019',
  },
  tailor: {
    flex: 1,
    alignSelf: 'flex-end',
    color: '#ffffff',
    fontSize: 22,
    marginTop: '8%',
    marginRight: '2%',    
  },
  tailor2: {
    flex: 1,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: '#808080',
    fontSize: 22,
    marginBottom: '2%',
    marginRight: '2%',
  },
  logo: {
    flex: 1,
    borderRadius: 80,
    resizeMode: 'contain',
    height: 150,
    width: 230,
    marginRight: '2%',
    alignSelf: 'flex-end',
  },
})

export default Itenary;