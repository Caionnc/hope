import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

/*
    Components for Router
*/
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import LoginScreenAvoidingView from './screens/LoginScreenAvoidingView';
import RegisterScreen from './screens/RegisterScreen';

class App extends Component {
  render() {
    return (
      <Router>
          <Scene key='root'>
            <Scene key='login' component={RegisterScreen} initial={true} hideNavBar={true}></Scene>
            {/*<Scene key='login' component={LoginScreenAvoidingView} initial={true} hideNavBar={true}></Scene> */}
          </Scene>
      </Router>
    );
  }
}

//<Scene key='loading' component={LoadingScreen} initial={false} hideNavBar={true}></Scene>
//<Scene key='login' component={LoginScreen} initial={true} hideNavBar={true}></Scene>
export default App;
