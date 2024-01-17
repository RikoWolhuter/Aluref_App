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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Centered Image */}
      {/*
      <Image
        style={{ width: 250, height: 250, marginTop: 32 }}
        source={require('./uc.png')}
      />
  */}

      {/* Email TextInput */}
      <TextInput
        style={{
          width: '80%',
          height: 48,
          marginTop: 16,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 8,
        }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password TextInput */}
      <TextInput
        style={{
          width: '80%',
          height: 48,
          marginTop: 16,
          borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 8,
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Login Button */}
      <Button
        title="Login"
        onPress={handleLogin}
        style={{ marginTop: 24, width: '80%' }}
        color="#841584"
      />

      {/* Google Sign-In Button */}
      <TouchableOpacity
        onPress={handleGoogleSignIn}
        style={{
          width: '80%',
          height: 48,
          marginTop: 16,
          backgroundColor: '#4285F4',
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
