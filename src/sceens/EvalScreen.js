import React, {useState} from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import CenteredContainer from "../components/CenteredContainer";
import {View, Text} from "react-native";
import AppText from "../components/AppText";
const EvalScreen = ({route, navigation}) => {
  const { courseID, difficulty, duration, sessionXP, correctAnswers, wrongAnswers } = route.params;

  return (
    <FullHeightContainer classes={"px-3"}>
      <CenteredContainer>
        <AppText>CourseID {courseID}</AppText>
        <AppText>Gained Session XP (can be negative) {sessionXP}</AppText>
        <AppText>Selected game duration (0-60min) {duration}</AppText>
        <AppText>Selected game difficulty (0-2) {difficulty}</AppText>
        <AppText>correct Answers {correctAnswers}</AppText>
        <AppText>wrong Answers {wrongAnswers}</AppText>
      </CenteredContainer>
    </FullHeightContainer>
  )
}

export default EvalScreen;