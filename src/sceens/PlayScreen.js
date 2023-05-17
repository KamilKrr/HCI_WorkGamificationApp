import React from 'react';
import Container from "../components/Container";
import AppText from "../components/AppText";
const PlayScreen = ({route, navigation}) => {
  console.log(route.params);
  const { courseID, difficulty, duration } = route.params;
  return (
    <Container>
      <AppText>Game Selected</AppText>
      <AppText>Difficulty: {difficulty}</AppText>
      <AppText>Duration: {duration}</AppText>
    </Container>
  )
}

export default PlayScreen;