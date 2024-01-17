import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';

const LoginActivity = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login functionality here
    console.log('Login pressed');
  };

  const handleGoogleSignIn = () => {
    // Implement your Google Sign-In functionality here
    console.log('Google Sign-In pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -150, backgroundColor: 'white' }}>
      {/* Centered Image */}
      <Image
        style={{ width: 250, height: 250, marginTop: 32 }}
        source={require('../uc.png')}
      />

      {/* Email TextInput */}
      <TextInput
        style={{
          width: '80%',
          height: 48,
          marginTop: 16,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 8,
          color: 'black',
        }}
        placeholder="Email"
        placeholderTextColor="#808080"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password TextInput */}
      <TextInput
        style={{
          width: '80%',
          height: 48,
          marginTop: 16,
          marginBottom: 20,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 8,
          color: 'black',
        }}
        placeholder="Password"
        placeholderTextColor="#808080"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Login Button */}
      <Button
        title="Login"
        onPress={handleLogin}
        style={{ marginTop: 10, width: '80%' }}
        color="#000080"
      />

      {/* Google Sign-In Button */}
      <TouchableOpacity
        onPress={handleGoogleSignIn}
        style={{
          width: '80%',
          height: 48,
          marginTop: 20,
          backgroundColor: '#DC973D',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        disabled={false} // Set this to true when you enable Google Sign-In
      >
        <Text style={{ color: 'white' }}>Google Sign-In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginActivity;
