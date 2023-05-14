import React, {useContext} from 'react';
import { Text } from 'react-native';
import { ThemeContext } from "../context/ThemeContext";

const Container = ({ children }) => {
  return (
    <Text className="text-zinc-900 dark:text-white mt-5 text-base font-medium tracking-tight">
      {children}
    </Text>
  );
};

export default Container;