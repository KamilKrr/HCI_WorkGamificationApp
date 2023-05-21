import React, {useState} from 'react';
import {View} from 'react-native';
import ChatQuestion from "./ChatQuestion";
import ChatAnswer from "./ChatAnswer";

const QA = ({ question, sendAnswer }) => {
  const [questionAnimationFinished, setQuestionAnimationFinished] = useState(false);

  return (
    <View>
      <ChatQuestion person={"Q"} text={question['text']} setQuestionAnimationFinished={() => setQuestionAnimationFinished(true)}></ChatQuestion>
      {questionAnimationFinished ?
      <ChatAnswer sendAnswer={sendAnswer} person={"A"} answer={question['answer']} options={question['options']}></ChatAnswer> : null}
    </View>
  );
};

export default QA;