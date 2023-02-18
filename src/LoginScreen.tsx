import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {

    
    
    if(validateEmail && validatePassword) {
        navigation.navigate('DoctorsList')
        console.log("inside");
    }
 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onBlur={validatePassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}  >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.socialText}>Or Sign in with.</Text>
      <View style={{flexDirection: 'row', padding: 20, }}>
        <Image source={require('../assets/facebook.png')} style={styles.socialImg} />
        <Image source={require('../assets/google.png')} style={styles.socialImg} />
        <Image source={require('../assets/twitter.png')} style={styles.socialImg} />
      </View>
     <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 18}}>Dont't have an Account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')
        }>
        <Text style={{fontSize: 18, color: '#1e2f97'}}>Sign up</Text>
        </TouchableOpacity>
       
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 55,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    
  },
  error: {
    color: 'red',
    marginBottom: 10,
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
  socialText: {
    marginTop: 60,
    fontSize: 18,
    fontWeight: '500'
  },
  socialImg: {
    height: 45,
    width: 40,
    margin: 20
  }
});

export default LoginScreen;