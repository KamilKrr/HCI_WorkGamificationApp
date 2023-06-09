import React from 'react';
import CenteredContainer from './CenteredContainer'
import { View, Text, StyleSheet } from 'react-native';
import AppText from "./AppText";
import { useSelector } from 'react-redux';
import courses from "../../assets/courses";
import { createSelector } from '@reduxjs/toolkit';
import Container from "./Container";
export function XpPointsComponent({ courseId }){
  const selectExperiencePointsByCourseId = createSelector(
      state => state.xp.value,
      (_, courseId) => courseId,
      (xpValue, courseId) => xpValue[courseId] || 0
  );
  const xpPoints = useSelector(state => selectExperiencePointsByCourseId(state, courseId));
  const course = courses[courseId].title;

  let percent = Math.abs(xpPoints)/250/2 * 100;
  percent = Math.min(Math.max(percent, 7), 50);

  let levelText = '';
  if (xpPoints < 40) {
    levelText += "Intern";
  }
  else if (xpPoints >= 40 && xpPoints < 80) {
    levelText += "Junior";
  }
  else if (xpPoints >= 80 && xpPoints < 120) {
    levelText += "Security Expert";
  }
  else if (xpPoints >= 120 && xpPoints < 200) {
    levelText += "Security Lead";
  }
  else if (xpPoints >= 200 && xpPoints < 240) {
    levelText += "Security God";
  }
  else if (xpPoints >= 240) {
    levelText += "CTO";
  }
  return (
    <View className={"mx-4 my-1"}>
      <View>
        <View className={"flex flex-row justify-between"}>
          <Text className="text-sm font-bold text-gray-500 dark:text-gray-400">{course}</Text>
          <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">{levelText}</Text>
        </View>
        <View className="flex flex-row items-center mb-3">
          <View className="w-full bg-gray-200 rounded dark:bg-gray-700 mr-2">
            {xpPoints >= 0 ?
            <View className="bg-green-600 rounded-r dark:bg-green-500" style={[{left: '50%', width: percent+'%'}]}>
              <Text className={"ml-1 p-0.5 text-xs text-white font-bold"}>{xpPoints}</Text>
            </View>
              :
            <View className="bg-red-600 rounded-l dark:bg-red-500" style={[{left: (50-percent) + '%', width: percent + '%'}]}>
              <Text className={"mr-1 p-0.5 text-xs text-white font-bold text-right"}>{xpPoints}</Text>
            </View>
            }
          </View>
        </View>
      </View>
    </View>
  );
};



