import React from 'react';
import {ScrollView} from "nativewind/dist/preflight";
import Course from './Course';
import Container from "./Container";
import AppText from "./AppText";

export function CourseList({ heading, courses, navigation }) {
  return (
    <Container>
      <AppText>
        {heading}
      </AppText>
      <ScrollView horizontal={true}>
        {courses.map((course) => {
          return <Course navigation={navigation} key={course.id} course={course}/>;
        })}
      </ScrollView>
    </Container>
  )
}

