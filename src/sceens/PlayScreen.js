import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addXP} from "../redux/experiencePointsSlice";
import FullHeightContainer from "../components/FullHeightContainer";
import CenteredContainer from "../components/CenteredContainer";
import ChatQuestion from "../components/Game/ChatQuestion";
import {View} from "react-native";
import ChatAnswer from "../components/Game/ChatAnswer";
const PlayScreen = ({route, navigation}) => {
  const [experiencePoints, setExperiencePoints] = useState(0);
  const { courseID, difficulty, duration } = route.params;
  const dispatch = useDispatch()
  const xp = useSelector((state) => state.xp.value);
  const [questionAnimationFinished, setQuestionAnimationFinished] = useState(false);

  const handleAddXP = () => {
    dispatch(addXP({ courseID: courseID, points: 5 }));
  };

  return (
    <FullHeightContainer>
      <CenteredContainer>
        <View className={"w-full"}>
          <ChatQuestion person={"K"} text={"What is a common method used in social engineering attacks?"} setQuestionAnimationFinished={() => setQuestionAnimationFinished(true)}></ChatQuestion>
          {questionAnimationFinished ?
            <ChatAnswer person={"K"} options={["Phishing", "Encryption", "Firewall", "Intrusion Detection System"]}></ChatAnswer> : null}
        </View>

      </CenteredContainer>
    </FullHeightContainer>
  )
}

export default PlayScreen;