import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

const Inicio = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Mi APP</Text>
      <Image source={require('../my-app/assets/icon.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />
      <TextInput placeholder="Nombre de usuario" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10, width: 200 }} />
      <TextInput placeholder="Contraseña" secureTextEntry style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <Button title="Ingresar" onPress={() => console.log('Ingresar')} />
      <TouchableOpacity onPress={() => console.log('Crear cuenta')}>
        <Text style={{ marginTop: 20, color: 'blue' }}>Crear cuenta</Text>
      </TouchableOpacity>
      <View style={{ position: 'absolute', bottom: 10 }}>
        <Text>Versión 1.0.0</Text>
      </View>
    </View>
  );
};

export default Inicio;
