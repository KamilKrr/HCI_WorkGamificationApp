
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from "../components/AppText";
import { useNavigation } from '@react-navigation/native';
import CenteredContainer from "../components/CenteredContainer";
import FullHeightContainer from "../components/FullHeightContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    console.log(email, password);
    if(password != '' || email != ''){
      navigation.navigate('WelcomeScreen')
    }
    else{
      navigation.navigate('TabNavigator')
    }
  };

  return (
    <FullHeightContainer>
      <CenteredContainer>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <AppButton title="Login" onPress={handleLogin} />
      </CenteredContainer>
    </FullHeightContainer>

  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;