import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
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
    <FullHeightContainer classes={"m-4"}>
      <View
        className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Text className="text-xl font-medium text-gray-900 dark:text-white mb-5">Sign in to Securio</Text>
        <View className="mb-5">
          <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            email</Text>
          <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     placeholder="name@company.com"
                     onChangeText={text => setEmail(text)}
                     value={email}/>
        </View>
        <View className="mb-5">
          <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            password</Text>
          <TextInput placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     onChangeText={text => setPassword(text)}
                     value={password}
                     secureTextEntry/>
        </View>
        <AppButton title="Login to your account" onPress={handleLogin}/>
      </View>
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