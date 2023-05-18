import React, {useState} from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import CenteredContainer from "../components/CenteredContainer";
import {View, Text} from "react-native";
const EvalScreen = ({route, navigation}) => {
  const { courseID, difficulty, duration, sessionXP, correctAnswers, wrongAnswers } = route.params;

  return (
    <FullHeightContainer classes={"px-3"}>
      <CenteredContainer>
        <Text>CourseID {courseID}</Text>
        <Text>Gained Session XP (can be negative) {sessionXP}</Text>
        <Text>Selected game duration (0-60min) {duration}</Text>
        <Text>Selected game difficulty (0-2) {difficulty}</Text>
        <Text>correct Answers {correctAnswers}</Text>
        <Text>wrong Answers {wrongAnswers}</Text>
      </CenteredContainer>
    </FullHeightContainer>
  )
}

export default EvalScreen;