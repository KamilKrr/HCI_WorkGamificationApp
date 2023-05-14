import React from 'react';
import {View} from 'react-native';

const Container = ({ children }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {children}
    </View>
  );
};

export default Container;