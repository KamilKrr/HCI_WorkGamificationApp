import { useState, createContext } from "react";
import { useColorScheme } from "nativewind";
import { StatusBar } from 'react-native';
import {Platform} from "expo-modules-core/src";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#ff0000');
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const toggleScheme = () => {
    toggleColorScheme();
    //set status bar color on ios/android whenever theme changes
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle(colorScheme !== 'light' ? 'dark-content' : 'light-content');
    }else {
      StatusBar.setBackgroundColor(colorScheme !== 'light' ? '#fff' : '#000')
    }
  }

  const context = {
    colorScheme: colorScheme,
    toggleColorScheme: toggleScheme,
    primaryColor: primaryColor,
    setPrimaryColor: (newPrimaryColor) => setPrimaryColor(newPrimaryColor)
  };
  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};