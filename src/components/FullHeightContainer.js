import React from 'react';
import {View} from 'react-native';

const FullHeightContainer = ({ children }) => {
  return (
    <View className="h-full flex flex-col justify-center">
      {children}
    </View>
  );
};

export default FullHeightContainer;