import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addXP} from "../redux/experiencePointsSlice";
import FullHeightContainer from "../components/FullHeightContainer";
import {View} from "react-native";
import GameHeader from "../components/Game/GameHeader";
import {ScrollView} from "nativewind/dist/preflight";
import courses from "../../assets/courses";
import QA from "../components/Game/QA";

const PlayScreen = ({route, navigation}) => {
  const [sessionXP, setSessionXP] = useState(0);
  const { courseID, difficulty, duration } = route.params;
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const dispatch = useDispatch()
  const [questionID, setQuestionID] = useState(0);
  const selectedCourse = courses.find(c => c.id === courseID);
  const endGameTimeout = useRef(null);
  const correctAnswers = useRef(0);
  const wrongAnswers = useRef(0);

  const handleSendAnswer = (answer) => {
    let updatedSessionXP;
    if (answer === courses[courseID]['questions'][questionID]['answer']) {
      updatedSessionXP = sessionXP + 20 * (difficulty + 1);
      correctAnswers.current++;
    } else {
      updatedSessionXP = sessionXP - 40 * difficulty;
      wrongAnswers.current++;
    }
    setSessionXP(updatedSessionXP);

    if (timeRemaining <= 0 || questionID >= courses[courseID]['questions'].length-1) {
      handleGameEnded(updatedSessionXP);
    } else {
      setQuestionID((previousQuestionID) => previousQuestionID + 1);
    }
  };

  const handleGameEnded = (finalSessionXP) => {
    dispatch(addXP({ courseID: courseID, points: finalSessionXP }));
    endGameTimeout.current = setTimeout(() => {
      navigation.navigate('Eval', {
        courseID: courseID,
        difficulty: difficulty,
        duration: duration,
        sessionXP: finalSessionXP,
        correctAnswers: correctAnswers.current,
        wrongAnswers: wrongAnswers.current,
      });
    }, 3000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((previousTimeRemaining) => {
        if (previousTimeRemaining <= 0) {
          clearInterval(timer);
          return previousTimeRemaining;
        }
        return previousTimeRemaining - 1;
      });
    }, 60000);

    return () => {
      clearInterval(timer);
      clearTimeout(endGameTimeout.current);
    };
  }, [duration, questionID]);

  return (
    <FullHeightContainer classes={"justify-start"}>
      <GameHeader timeRemaining={timeRemaining} sessionXP={sessionXP}/>
      <ScrollView className={"pt-3"}>
        <View className={"w-full pb-20"}>
          {selectedCourse['questions'].slice(0, questionID+1).map((question, index) => (
            <QA key={index} question={question} sendAnswer={handleSendAnswer}></QA>
            ))}
        </View>
      </ScrollView>
    </FullHeightContainer>
  )
}

export default PlayScreen;