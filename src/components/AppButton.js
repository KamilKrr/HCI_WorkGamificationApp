import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={"bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "}>
      <Text className={"text-white font-medium text-sm"}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;