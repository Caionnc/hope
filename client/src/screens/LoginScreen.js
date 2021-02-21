import React, { Component } from 'react';
import {View, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

//Import de imagens
import hopehandslogo from '../images/hopelhandslogo.png';

class LoginScreen extends Component{
    render() {
        return(
            //Logo acima do Login... via e-mail e senha
            <View style={styles.background}>
                
                <View style={styles.containerLogo}>
                    <Image source={hopehandslogo}/>
                </View>
                
                <View style={styles.container}>
                    <TextInput 
                        style={styles.input}
                        placeholder= "E-mail"   
                        autoCorrect={false} 
                        onChangeText={()=>{}}> 
                    </TextInput>
                
                    <TextInput 
                        style={styles.input}
                        placeholder= "Senha" 
                        autoCorrect={false} 
                        onChangeText={()=>{}}> 
                    </TextInput>
                

                    <TouchableOpacity>
                        <Text >Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Criar nova conta</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        );
        
       
    } 
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    background: {
        flex: 1,
        backgroundColor: '#4406a1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 10,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    }
  });
  