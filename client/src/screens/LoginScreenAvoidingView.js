import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

//Import de imagens
import hopehandslogo from '../images/hopelhandslogo.png';

import api from '../services/api';

class LoginScreen extends Component {
  render() {
    return (
      // Logo acima do Login... via e-mail e senha
      <View style={styles.background}>
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Image source={hopehandslogo} />
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={() => { }}></TextInput>

              <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => {}}></TextInput>

              <TouchableOpacity style={styles.btnEntrar}>
                <Text style={styles.btnEntrarText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCriarNovaConta}>
                <Text style={styles.btnCriarNovaContaText}>
                  Criar nova conta
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#4406a1',
    width: '100%'
  },
  containerLogo: {
    justifyContent: 'center',
    marginTop: 65,
  },
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    borderRadius: 7,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 10,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnEntrar: {
    // flex: 0,
    backgroundColor: '#4406a1',
    width: '90%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnEntrarText: {
    color: '#F5FFFA',
    fontSize: 18,
  },
  btnCriarNovaConta: {
    // flex: 0,
    color: '#FFF',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnCriarNovaContaText: {
    marginTop: 12,
    color: '#4406a1',
    fontSize: 15,
  },
});
