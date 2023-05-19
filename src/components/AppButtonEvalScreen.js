import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const AppButtonEvalScreen = ({ title, onPress, classes }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={"justify-center px-5 py-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg m-1 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " + classes}>
      <Text className={"text-white font-large text-sm text-center"}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButtonEvalScreen;