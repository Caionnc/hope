import React, {Component} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

//Import de imagens
class RegisterScreen extends Component {
  render() {
    return (
      // Logo acima do Login... via e-mail e senha
      <View style={styles.background}>
        <View style={styles.container}>
            <Text style ={styles.aspasText}>"</Text>

            <Text style={styles.fraseText}>Não importa o quão escura seja a noite.{"\n"}
                <Text style={styles.fraseText}>Sua luz nunca se apagará.</Text>
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCorrect={false}
                onChangeText={() => {}}></TextInput>
                
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={() => {}}></TextInput>

            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => {}}></TextInput>

            <TouchableOpacity style={styles.btnRegistrar}>
                <Text style={styles.btnRegistrarText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}

export default RegisterScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#4406a1',
    alignItems: 'center',
    width: '100%'
  },
  container: {
    flex:1,
    backgroundColor: '#4406a1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
    marginTop: 120,
    width: '90%',
    borderRadius: 7,
  },
  aspasText:{
    color: "#FFF",
    fontSize: 40
  },
  fraseText:{
    color: "#FFF",
    marginBottom:120,
    fontSize:18,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 10,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    //padding: 10,
  },
  btnRegistrar: {
    // flex: 0,
    backgroundColor: '#4406a1',
    width: '90%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnRegistrarText: {
    color: '#F5FFFA',
    fontSize: 18,
  }
});
