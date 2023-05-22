import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CenteredContainer from "./CenteredContainer";
import AppRadioButton from "./AppRadioButton";

const DurationPicker = ({ duration, setDuration }) => {


  return (
    <CenteredContainer>
      <Text className="mt-3 mb-2 text-lg text-gray-900 dark:text-white font-bold">How much time do you have?</Text>
      <View className="grid w-full gap-3 md:grid-cols-2">
        <View>
          <AppRadioButton title={"1 Question"} label={"Pass the elevator ride"} isActive={duration === 0} onPress={() => setDuration(0)}/>
        </View>
        <View>
          <AppRadioButton title={"5 Questions"} label={"Rapid-Fire Round"} isActive={duration === 5} onPress={() => setDuration(5)}/>
        </View>
        <View>
          <AppRadioButton title={"1 Minute"} label={"Coffee Break Challenge"} isActive={duration === 1} onPress={() => setDuration(1)}/>
        </View>
        <View>
          <AppRadioButton title={"3 Minutes"} label={"Waiting for my Uber"} isActive={duration === 3} onPress={() => setDuration(3)}/>
        </View>
        <View>
          <AppRadioButton title={"10 Minutes"} label={"TV Break Trivia"} isActive={duration === 10} onPress={() => setDuration(10)}/>
        </View>
      </View>
    </CenteredContainer>
  );
};

export default DurationPicker;


