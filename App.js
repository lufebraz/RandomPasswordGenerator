import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789!@?#';

export default function App() {

  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10);

  function generatePass(){

    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
  }
  function copyPass(){
    Clipboard.setString(password)
    alert('Senha copiada com sucesso!')
  }

  return (
    
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />


      <Text style={styles.title}>{size} Caracteres</Text>


      <View style={styles.area}>
        <Slider
          styles={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>generate random password</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}


    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo: {
    marginBottom: 60

  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',

  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 9,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15

  },
  buttonText: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',

  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 30
  }
});