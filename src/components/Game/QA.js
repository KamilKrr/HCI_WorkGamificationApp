import React, {useState} from 'react';
import {View} from 'react-native';
import ChatQuestion from "./ChatQuestion";
import ChatAnswer from "./ChatAnswer";

const QA = ({ question, sendAnswer }) => {
  const [questionAnimationFinished, setQuestionAnimationFinished] = useState(false);

  return (
    <View>
      <ChatQuestion person={"K"} text={question['text']} setQuestionAnimationFinished={() => setQuestionAnimationFinished(true)}></ChatQuestion>
      {questionAnimationFinished ?
      <ChatAnswer sendAnswer={sendAnswer} person={"K"} answer={question['answer']} options={question['options']}></ChatAnswer> : null}
    </View>
  );
};

export default QA;