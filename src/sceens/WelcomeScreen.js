import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from "../components/AppText";
import { useNavigation } from '@react-navigation/native';

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
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);



    return(<View style={styles.container}>
        <AppText style ={styles.text}>{text}</AppText>
            {isTextComplete && (
                <AppButton title="Continue" onPress={()=> navigation.navigate('TabNavigator')} />
            )}
    </View>
);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
});

export default WelcomeScreen;