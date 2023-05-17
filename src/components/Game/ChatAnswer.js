import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import { ThemeContext } from "../../context/ThemeContext";
import AnswerOptionPicker from "./AnswerOptionPicker";

const ChatQuestion = ({ person, options }) => {
  const [answer, setAnswer] = useState();

  return (
    <View className="col-start-6 col-end-13 p-3 rounded-lg">
      <View className="flex items-start justify-start flex-row">
        <View className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-700 flex-shrink-0">
          <Text className={"text-white"}>{person}</Text>
        </View>
        <View className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <AnswerOptionPicker options={options} answer={answer} setAnswer={setAnswer}/>
        </View>
      </View>
    </View>
  );
};

export default ChatQuestion;
