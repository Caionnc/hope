import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

/*
    Components for Router
*/
import LoadingScreen from './screens/LoadingScreen';

class App extends Component {
  render() {
    return (
      <Router>
          <Scene key='root'>
            <Scene key='loading' component={LoadingScreen} initial={true} hideNavBar={true}></Scene>
          </Scene>
      </Router>
    );
  }
}

export default App;
