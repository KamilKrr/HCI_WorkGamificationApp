import React, { useEffect, useState } from 'react';
import AppButton from '../components/AppButton';
import AppText from "../components/AppText";
import { useNavigation } from '@react-navigation/native';
import CenteredContainer from "../components/CenteredContainer";
import FullHeightContainer from "../components/FullHeightContainer";
import AnimatedText from "../components/AnimatedText";
import {Image, View, Text} from "react-native";

const WelcomeScreen = () =>{
  const navigation = useNavigation();
  const fullText = 'Welcome to securio, the gamified security awareness application. Remember to keep your user credentials to yourself!';
  const [isTextComplete, setIsTextComplete] = useState(false);

  return(
    <FullHeightContainer classes={"m-4"}>
      <CenteredContainer>


        <View
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <View className="">
            <Image className="max-w-sm max-h-40 rounded-t-lg" source={require('../../assets/code.jpg')}/>
          </View>
          <View className="p-5">
            <View>
              <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to Securio!</Text>
            </View>
            <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">Securio is a gamified security awareness application. Learn all about IT-Security by completing our hand crafted lessons.</Text>
            <View className="border border-red-300 flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                 role="alert">
              <View>
                <Text className="font-bold text-red-800">First lesson:</Text>
                <Text className="text-red-800">Remember to never share your user credentials with anyone!</Text>
              </View>
            </View>
            <AppButton title="Understood!" onPress={()=> navigation.navigate('LoginScreen')} />
          </View>
        </View>
      </CenteredContainer>
    </FullHeightContainer>
  );
};

export default WelcomeScreen;