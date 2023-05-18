import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CenteredContainer from "./CenteredContainer";
import AppRadioButton from "./AppRadioButton";

const DurationPicker = ({ duration, setDuration }) => {


  return (
    <CenteredContainer>
      <Text className="mb-5 text-lg text-gray-900 dark:text-white font-bold">How much time do you have?</Text>
      <View className="grid w-full gap-3 md:grid-cols-2">
        <View>
          <AppRadioButton title={"1 Question"} label={"Im in an elevator"} isActive={duration === 0} onPress={() => setDuration(0)}/>
        </View>
        <View>
          <AppRadioButton title={"1 Minute"} label={"While my coffee is hot"} isActive={duration === 1} onPress={() => setDuration(1)}/>
        </View>
        <View>
          <AppRadioButton title={"5 Minutes"} label={"Waiting for my Uber"} isActive={duration === 5} onPress={() => setDuration(5)}/>
        </View>
        <View>
          <AppRadioButton title={"20 Minutes"} label={"Travelling by bus"} isActive={duration === 20} onPress={() => setDuration(20)}/>
        </View>
        <View>
          <AppRadioButton title={"1 Hour"} label={"Im on vacation"} isActive={duration === 60} onPress={() => setDuration(60)}/>
        </View>
      </View>
    </CenteredContainer>
  );
};

export default DurationPicker;


