import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CenteredContainer from "./CenteredContainer";
import AppRadioButton from "./AppRadioButton";

const DifficultyPicker = ({ difficulty, setDifficulty }) => {

  return (
    <CenteredContainer>
      <Text className="mb-5 text-lg text-gray-900 dark:text-white font-bold">Choose your level:</Text>
      <View className="w-100 flex flex-row justify-center w-full gap-3">
        <View>
          <AppRadioButton title={"Easy"} icon={"baby"} isActive={difficulty === 0} onPress={() => setDifficulty(0)}/>
        </View>
        <View>
          <AppRadioButton title={"Medium"} icon={"child"} isActive={difficulty === 1} onPress={() => setDifficulty(1)}/>
        </View>
        <View>
          <AppRadioButton title={"Expert"} icon={"book-dead"} isActive={difficulty === 2} onPress={() => setDifficulty(2)}/>
        </View>
      </View>
    </CenteredContainer>
  );
};

export default DifficultyPicker;


