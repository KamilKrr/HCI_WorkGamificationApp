import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CenteredContainer from "./CenteredContainer";
import Container from "./Container";
import {useNavigation} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const PreferencesHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <View className={"d-flex flex-row align-middle"}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
            <Icon className={"m-1 mr-3"} name={"backward"} size={28}></Icon>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">{title}</Text>
        </View>
      </View>
    </Container>
);
};

export default PreferencesHeader;