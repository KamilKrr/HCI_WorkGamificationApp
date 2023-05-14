import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from "../context/ThemeContext";

const Container = ({ children }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-zinc-900">
      {children}
    </View>
  );
};

export default Container;