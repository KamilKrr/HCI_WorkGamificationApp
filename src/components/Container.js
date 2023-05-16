import React from 'react';
import {View} from 'react-native';

const Container = ({ children }) => {
  return (
    <View className="p-3">
      {children}
    </View>
  );
};

export default Container;