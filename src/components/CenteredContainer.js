import React from 'react';
import {View} from 'react-native';

const CenteredContainer = ({ children }) => {
  return (
    <View className="p-3 justify-center items-center">
      {children}
    </View>
  );
};

export default CenteredContainer;