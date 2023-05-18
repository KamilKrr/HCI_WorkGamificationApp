import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppRadioButton = ({ title, label, icon, onPress, isActive, classes }) => {
  const activeClasses = "text-blue-500 border-blue-600";
  const inactiveClasses = "dark:text-white text-gray-500";
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <View className={
      "border-2 inline-flex items-center justify-between w-full p-5 bg-white border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      + (isActive ? activeClasses : inactiveClasses) + " " + classes}>
        <View className="block flex-col items-center">
          {icon ?
            <Icon className={"dark:text-gray-400 w-full "+ (isActive ? "text-blue-600" : "")} name={icon} size={30}></Icon> : null}
          {title ?
            <Text className={"dark:text-gray-400 w-full text-lg font-semibold "+ (isActive ? "text-blue-600" : "")}>{title}</Text> : null}
          {label ?
            <Text className={"break-all dark:text-gray-400 "+ (isActive ? "text-blue-600" : "") + " " + classes}>{label}</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppRadioButton;