import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import tickCross from '../images/tickcross3.png'

class DashboardScreen extends Component {
  render() {
    return (
      // Logo acima do Login... via e-mail e senha
    <View style={styles.background}>
        <Text style={styles.hopeText}>PROJETO HOPE</Text>
        <Text style={styles.loggedText}>Você está devidamente logado!</Text>
        <Image source={tickCross} style={styles.tickImage}></Image>
    </View>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#4406a1',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loggedText: {
    color: '#FFF',
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  hopeText:{
    color: '#FFF',
    fontSize: 35,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  tickImage: {
    marginTop: 50
  }

});
