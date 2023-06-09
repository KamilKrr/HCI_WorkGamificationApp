import React from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import CenteredContainer from "../components/CenteredContainer";
import AppText from "../components/AppText";
import requireAssets from "../../assets/requireAssets";
import CircularProgress from 'react-native-circular-progress-indicator';
import {Text, View} from "react-native";
import AppButtonEvalScreen from "../components/AppButtonEvalScreen";
import {ScrollView} from "nativewind/dist/preflight";


const EvalScreen = ({route, navigation}) => {
    const {courseID, difficulty, duration, sessionXP, correctAnswers, wrongAnswers} = route.params;
    const allQuestions = wrongAnswers + correctAnswers;
    const correctAnswersPercentage = correctAnswers / allQuestions;
    let medalAward;
    let praiseMessage = null;

    if (correctAnswersPercentage >= 1) {
        medalAward = requireAssets.find(asset => asset['assetName'] === "medalAward")["assetContent"];
        praiseMessage = <AppText classes={"text-3xl font-bold"}>Congrats!</AppText>
    } else if (correctAnswersPercentage >= 0.8) {
        medalAward =
            <CircularProgress value={correctAnswersPercentage * 100} maxValue={100} valueSuffix={'%'} duration={2000}/>;
        praiseMessage = <AppText classes={"text-3xl font-bold"}>Well Done!</AppText>
    } else {
        medalAward =
            <CircularProgress value={correctAnswersPercentage * 100} maxValue={100} valueSuffix={'%'} duration={2000}/>;
    }

    const exitEvalScreen = () => {
        navigation.navigate('Courses');
    }
    const restartGame = () => {
        navigation.navigate('CoursePreferences', {
            courseID: courseID,
        });
    }


    const evalInfo = (
        <CenteredContainer>
          <View className={"mt-3"}>{medalAward}</View>
          {praiseMessage}
          <AppText>
            You've attempted
            <AppText classes={"font-bold text-blue-500 text-xl"}> {allQuestions} {allQuestions === 1 ? "question, " : "questions, "}</AppText>
            and you got
            <AppText classes={"font-bold text-green-500 text-xl"}> {correctAnswers} </AppText>
            {correctAnswers <= 1  ? 'right!' : 'of them right!'}
          </AppText>
          <AppText>
            Earned XP:
          </AppText>
          <View className={"m-6 mt-2 inline-flex items-center justify-center px-4 py-2 rounded-xl " + (sessionXP < 0 ? 'bg-red-200' : 'bg-green-200')}>
            <Text className={"text-3xl font-bold leading-sm uppercase " + (sessionXP < 0 ? 'text-red-700' : 'text-green-700')}>
              xp {sessionXP > 0 ? '+' : ''}{sessionXP}
            </Text>
          </View>
        </CenteredContainer>
    );

    const buttons = (
        <View className={"flex-row"}>
            <AppButtonEvalScreen title={"Play Again"} onPress={restartGame} classes={"flex-1"}></AppButtonEvalScreen>
            <AppButtonEvalScreen title={"Continue"} onPress={exitEvalScreen} classes={"flex-1"}></AppButtonEvalScreen>
        </View>
    );

    return (
        <FullHeightContainer classes={"p-5"}>
            <CenteredContainer classes={"flex px-4 pt-1 border-2 rounded-xl bg-white border-gray-200 shadow text-sm dark:bg-gray-800"}>
                {evalInfo}
                {buttons}
            </CenteredContainer>
        </FullHeightContainer>
    );
}

export default EvalScreen;