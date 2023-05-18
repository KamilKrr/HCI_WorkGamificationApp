import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import { ThemeContext } from "../../context/ThemeContext";
import AnimatedText from "../AnimatedText";

const ChatQuestion = ({ person, text, setQuestionAnimationFinished }) => {
  return (
    <View className="col-start-6 col-end-13 p-3 rounded-lg">
      <View className="flex items-center justify-start flex-row-reverse">
        <View className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-700 flex-shrink-0">
          <Text className={"text-white"}>{person}</Text>
        </View>
        <View className="relative w-10/12 mr-3 text-sm bg-blue-100 py-2 px-4 shadow rounded-xl">
          <AnimatedText text={text} animationFinishedCallback={setQuestionAnimationFinished}/>
        </View>
      </View>
    </View>
  );
};

export default ChatQuestion;
