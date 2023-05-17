import React, { useEffect, useState } from 'react';
import AppButton from '../components/AppButton';
import AppText from "../components/AppText";
import { useNavigation } from '@react-navigation/native';
import CenteredContainer from "../components/CenteredContainer";

const WelcomeScreen = () =>{
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const fullText = 'Welcome to securio, the gamified security awareness application. Remember to keep your user credentials to yourself!';
    const [isTextComplete, setIsTextComplete] = useState(false);
    useEffect(() => {
        let currentText = '';
        let index = 0;

        const timer = setInterval(() => {
            currentText += fullText.charAt(index);
            index++;

            setText(currentText);

            if (index === fullText.length) {
                clearInterval(timer);
                setIsTextComplete(true);
            }
        }, 1);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return(
      <CenteredContainer>
        <AppText>{text}</AppText>
            {isTextComplete && (
                <AppButton title="Continue" onPress={()=> navigation.navigate('LoginScreen')} />
            )}
        </CenteredContainer>
    );
};

export default WelcomeScreen;