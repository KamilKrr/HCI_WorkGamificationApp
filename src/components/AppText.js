import React, {useContext} from 'react';
import { Text } from 'react-native';
import { ThemeContext } from "../context/ThemeContext";

const Container = ({ children, classes }) => {
  return (
    <Text className={"text-zinc-900 dark:text-white mt-5 text-base font-medium tracking-tight " + classes}>
      {children}
    </Text>
  );
};

export default Container;