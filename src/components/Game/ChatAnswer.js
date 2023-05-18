import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { ThemeContext } from "../../context/ThemeContext";
import AnswerOptionPicker from "./AnswerOptionPicker";
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatQuestion = ({ person, options, sendAnswer, answer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [hasSendAnswer, setHasSendAnswer] = useState(false);

  const handeSendAnswer = () => {
    setHasSendAnswer(true);
    sendAnswer(selectedAnswer);
  }

  return (
    <View className="col-start-6 col-end-13 p-3 rounded-lg">
      <View className="flex items-start justify-start flex-row">
        <View className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-700 flex-shrink-0">
          <Text className={"text-white"}>{person}</Text>
        </View>
        <View className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl w-10/12">
          <AnswerOptionPicker options={options} hasSendAnswer={hasSendAnswer} correctAnswer={answer} selectedAnswer={selectedAnswer} setAnswer={setSelectedAnswer}/>

          {(selectedAnswer !== -1 && !hasSendAnswer)? <TouchableOpacity onPress={handeSendAnswer} className={"mb-1 flex flex-row items-center justify-center py-2 bg-blue-600 rounded-lg dark:bg-blue-600"}>
            <Text className={"text-white text-lg"}>Send</Text>
            <Icon className={"text-white ml-2"} name={"send"} size={20}></Icon>
          </TouchableOpacity> : null}
        </View>
      </View>
    </View>
  );
};

export default ChatQuestion;
