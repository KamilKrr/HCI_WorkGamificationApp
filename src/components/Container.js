import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from "../context/ThemeContext";

const Container = ({ children }) => {
  return (
    <View className="p-3">
      {children}
    </View>
  );
};

export default Container;