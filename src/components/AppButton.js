import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const AppButton = ({ title, onPress, classes }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={"flex justify-center w-full px-5 py-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " + classes}>
      <Text className={"text-white font-large text-sm text-center"}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;