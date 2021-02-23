import React, {Component} from 'react';
import {
  View, 
  StyleSheet, 
  Animated, 
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

//Logo Import
import hopelogo from '../images/hopelogo.png';


//Changing Scene between Loading to Login afte a setted timeout
const switchToLogin = () => {
  Actions.replace('dashboard');
};
class LoadingScreen extends Component {
  state = {
    LogoAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.LogoAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: false,
    }).start();

    setTimeout(switchToLogin, 3700)
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnim,
          }}>
          <Image source={hopelogo} />
        </Animated.View>
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4406a1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
