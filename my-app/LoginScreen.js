import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = React.useState('');
  const [contrasena, setContrasena] = React.useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    // Puedes verificar las credenciales, realizar una llamada a la API, etc.
  };

  return (
    <View>
      <Text>Bienvenido</Text>
      <TextInput
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Text>Versión del Aplicativo: 1.0.0</Text>
    </View>
  );
}

export default LoginScreen;
