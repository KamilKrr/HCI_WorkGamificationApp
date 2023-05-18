import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import CenteredContainer from "../CenteredContainer";
import AppRadioButton from "../AppRadioButton";
import AppText from "../AppText";

const AnswerOptionPicker = ({ options, answer, setAnswer }) => {
  const [fadeAnims] = useState(options.map(() => new Animated.Value(0)));

  useEffect(() => {
    const animations = options.map((_, index) => (
      Animated.timing(fadeAnims[index], {
        toValue: 1,
        duration: 350,
        delay: index * 20,
        useNativeDriver: true,
      })
    ));

    Animated.stagger(200, animations).start();
  }, []);

  return (
    <CenteredContainer>
      <AppText classes="mb-5 font-bold">What do you recommend?</AppText>
      <View className={"grid w-full gap-3 md:grid-cols-2"}>
        {options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnims[index]
            }}
          >
            <View>
              <AppRadioButton
                label={option}
                isActive={answer === index}
                onPress={() => setAnswer(index)}
              />
            </View>
          </Animated.View>
        ))}
      </View>
    </CenteredContainer>
  );
};

export default AnswerOptionPicker;
