import React from 'react';
import {View, Text} from "react-native";
import Container from "../components/Container";
import AppText from "../components/AppText";
import AppSubText from "../components/AppSubText";
import Course from "../components/Course";
import courses from "../../assets/courses";
import {CourseList} from "../components/CourseList";
const HomeScreen = () => {
  return (
    <Container>
      <AppText>Gamification App</AppText>
      <AppSubText>HCI Aufgabe 3, Gruppe 1</AppSubText>

      <CourseList heading={"Beginner Topics"} courses={courses.filter(c => c.category === "Beginner")}></CourseList>
      <CourseList heading={"Advanced Topics"} courses={courses.filter(c => c.category === "Expert")}></CourseList>
    </Container>
)
}

export default HomeScreen;