import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CenteredContainer from "./CenteredContainer";
import AppRadioButton from "./AppRadioButton";

const DifficultyPicker = ({ difficulty, setDifficulty }) => {

  return (
    <CenteredContainer>
      <Text className="mt-3 mb-2 text-lg text-gray-900 dark:text-white font-bold">Choose your level:</Text>
      <View className="w-100 flex flex-row justify-center w-full gap-3">
        <View>
          <AppRadioButton title={"Easy"} icon={"baby"} pill={"XP x1"} isActive={difficulty === 0} onPress={() => setDifficulty(0)}/>
        </View>
        <View>
          <AppRadioButton title={"Medium"} icon={"child"} pill={"XP x2"} isActive={difficulty === 1} onPress={() => setDifficulty(1)}/>
        </View>
        <View>
          <AppRadioButton title={"Expert"} icon={"book-dead"} pill={"XP x3"} isActive={difficulty === 2} onPress={() => setDifficulty(2)}/>
        </View>
      </View>
    </CenteredContainer>
  );
};

export default DifficultyPicker;


