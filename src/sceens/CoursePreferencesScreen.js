import React, {useState} from 'react';
import DurationPicker from "../components/DurationPicker";
import DifficultyPicker from "../components/DifficultyPicker";
import FullHeightContainer from "../components/FullHeightContainer";
import CenteredContainer from "../components/CenteredContainer";
import AppButton from "../components/AppButton";
const CoursePreferencesScreen = ({route, navigation}) => {
  const { courseID } = route.params;

  const [difficulty, setDifficulty] = useState(0);
  const [duration, setDuration] = useState(5);

  const play = () => {
    navigation.navigate('Play', {
      courseID: courseID,
      difficulty: difficulty,
      duration: duration,
    });
  }
  return (
    <FullHeightContainer classes={"px-3"}>
      <DurationPicker duration={duration} setDuration={setDuration}/>
      <DifficultyPicker difficulty={difficulty} setDifficulty={setDifficulty}/>
      <CenteredContainer>
        <AppButton title={"START SHIFT"} classes={"h-14 m-3"} onPress={play}></AppButton>
      </CenteredContainer>
    </FullHeightContainer>
  )
}

export default CoursePreferencesScreen;