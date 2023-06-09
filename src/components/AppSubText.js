import React, {useContext} from 'react';
import { Text } from 'react-native';
import { ThemeContext } from "../context/ThemeContext";

const Container = ({ children }) => {
  return (
    <Text className="text-zinc-800 dark:text-zinc-400 mt-2 text-sm">
      {children}
    </Text>
  );
};

export default Container;