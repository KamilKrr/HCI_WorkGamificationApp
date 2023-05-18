import React, { useEffect, useState } from 'react';
import AppButton from '../components/AppButton';
import AppText from "../components/AppText";
import { useNavigation } from '@react-navigation/native';
import CenteredContainer from "../components/CenteredContainer";
import FullHeightContainer from "../components/FullHeightContainer";
import AnimatedText from "../components/AnimatedText";

const WelcomeScreen = () =>{
  const navigation = useNavigation();
  const fullText = 'Welcome to securio, the gamified security awareness application. Remember to keep your user credentials to yourself!';
  const [isTextComplete, setIsTextComplete] = useState(false);

  return(
    <FullHeightContainer classes={"m-4"}>
      <CenteredContainer>
        <AnimatedText text={fullText} animationFinishedCallback={() => setIsTextComplete(true)}></AnimatedText>
        {isTextComplete && (
          <AppButton title="Continue" onPress={()=> navigation.navigate('LoginScreen')} />
        )}
      </CenteredContainer>
    </FullHeightContainer>
  );
};

export default WelcomeScreen;