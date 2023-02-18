import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,  Alert ,TouchableOpacity} from 'react-native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert('Please fill all the fields');
      return;
    }

   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '90%',
    height: 55,
    backgroundColor: '#1e2f97',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupScreen;