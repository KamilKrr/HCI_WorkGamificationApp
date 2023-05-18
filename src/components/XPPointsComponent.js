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
        <Text style={styles.label}>Course: {course}</Text>
        <Text style={styles.label}>Experience gained:</Text>
        <Text style={styles.xpText}>{xpPoints}</Text>
        <Text style={styles.label}>{levelText}</Text>
        <Text style={styles.label}>--------------------------</Text>
      </CenteredContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  xpText: {
    marginTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 25,
    marginTop: 20,
  },
});

