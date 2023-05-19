import React from 'react';
import CenteredContainer from './CenteredContainer'
import { View, Text, StyleSheet } from 'react-native';
import AppText from "./AppText";
import { useSelector } from 'react-redux';
import courses from "../../assets/courses";
import { createSelector } from '@reduxjs/toolkit';
export function XpPointsComponent({ courseId }){
  const selectExperiencePointsByCourseId = createSelector(
      state => state.xp.value,
      (_, courseId) => courseId,
      (xpValue, courseId) => xpValue[courseId] || 0
  );
  const xpPoints = useSelector(state => selectExperiencePointsByCourseId(state, courseId));
  const course = courses[courseId].title;


  let levelText = `Your current level is: `;
  if (xpPoints < 40) {
    levelText += "Intern";
  }
  else if (xpPoints >= 40 && xpPoints < 80) {
    levelText += "Junior";
  }
  else if (xpPoints >= 80 && xpPoints < 120) {
    levelText += "Security Expert";
  }
  else if (xpPoints >= 120 && xpPoints < 160) {
    levelText += "Security Lead";
  }
  else if (xpPoints >= 200 && xpPoints < 240) {
    levelText += "Security God";
  }
  else if (xpPoints >= 240) {
    levelText += "CTO";
  }
  return (
    <View >
      <CenteredContainer>
        <AppText>Course: {course}</AppText>
        <AppText>Experience gained:</AppText>
        <AppText>{xpPoints}</AppText>
        <AppText>{levelText}</AppText>
        <AppText>--------------------------</AppText>
      </CenteredContainer>
    </View>
  );
};



