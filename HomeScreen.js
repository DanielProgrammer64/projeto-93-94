import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Axe ='🪓';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./imagens/piano.jpeg')} style={styles.Image}/>
      <Text style={styles.Text}> tela de home feita por Daniel Assis</Text>
      <Text>{Axe}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  Text: {
    fontSize: 67,
    fontWeight: 'bold',
  },

  image: {

    width: 200,
    height: 600,
    marginTop: 15,
  },
});


export default HomeScreen;
