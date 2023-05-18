import React from 'react';
import {View} from 'react-native';

const FullHeightContainer = ({ children, classes }) => {
  return (
    <View className={"h-full flex flex-col justify-center " + classes}>
      {children}
    </View>
  );
};

export default FullHeightContainer;