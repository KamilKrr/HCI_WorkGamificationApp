import React from 'react';
import {View} from 'react-native';

const CenteredContainer = ({ children, classes }) => {
  return (
    <View className={"justify-center items-center " + classes}>
      {children}
    </View>
  );
};

export default CenteredContainer;