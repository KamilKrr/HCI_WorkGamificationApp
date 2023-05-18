import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import CenteredContainer from "../CenteredContainer";

const GameHeader = ({ timeRemaining, sessionXP }) => {
  return (
    <CenteredContainer>
      <View className={"shadow-md w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"}>
        <View className={"pt-10 flex flex-row justify-between"}>
          <Text className="text-3xl font-bold dark:text-white">IT Security Hotline</Text>
          <View className={"inline-flex items-center justify-center px-3 py-1 rounded-full " + (sessionXP < 0 ? 'bg-red-200' : 'bg-green-200')}>
            <Text className={"text-xs font-bold leading-sm uppercase " + (sessionXP < 0 ? 'text-red-700' : 'text-green-700')}>xp: {sessionXP > 0 ? '+' : ''}{sessionXP}</Text>
          </View>
        </View>
        <Text className="ml-2 font-semibold text-gray-500 dark:text-gray-400">Shift ends in: {timeRemaining} Minutes</Text>
      </View>
    </CenteredContainer>
  );
};

export default GameHeader;