import React, { useEffect, useState } from 'react';
import {Animated, TouchableOpacity, View, Text} from 'react-native';
import CenteredContainer from "../CenteredContainer";
import AppRadioButton from "../AppRadioButton";
import AppText from "../AppText";

const AnswerOptionPicker = ({ options, selectedAnswer, setAnswer, hasSendAnswer, correctAnswer }) => {
  const [fadeAnims] = useState(options.map(() => new Animated.Value(0)));

  useEffect(() => {
    const animations = options.map((_, index) => (
      Animated.timing(fadeAnims[index], {
        toValue: 1,
        duration: 500,
        delay: index * 25,
        useNativeDriver: true,
      })
    ));

    Animated.stagger(500, animations).start();
  }, []);

  const handleSetAnswer = (answer) => {
    if(!hasSendAnswer) setAnswer(answer);
  }

  return (
    <CenteredContainer>
      <AppText classes="mt-1 mb-2 font-bold">Choose your answer:</AppText>
      <View className={"grid w-full gap-3 md:grid-cols-2 mb-3"}>
        {options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnims[index]
            }}
          >
            <View>
              <AppRadioButton
                //set green/red border if answer was correct/incorrect
                classes={(hasSendAnswer && correctAnswer === index) ? 'border-green-600 text-green-700 font-bold' : (hasSendAnswer && correctAnswer !== selectedAnswer && selectedAnswer === index) ? 'border-red-600 text-red-700 font-bold' : ''}
                label={option}
                isActive={selectedAnswer === index}
                onPress={() => handleSetAnswer(index)}
              />
            </View>
          </Animated.View>
        ))}
      </View>
    </CenteredContainer>
  );
};

export default AnswerOptionPicker;
