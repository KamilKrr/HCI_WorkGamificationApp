import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTrophy, removeTrophy } from '../redux/trophySlice';
import AppButton from './AppButton';
import AppText from "./AppText";
import Trophy from "./Tropy";
import {ScrollView} from "nativewind/dist/preflight";

export function TrophyView() {
  const count = useSelector((state) => state.trophy.value)
  const dispatch = useDispatch()

  let trophyList = [];

  for(let i = 0; i < count; i++){
    trophyList.push(<Trophy key={i} index={i}/>);
  }
  return (
    <View>
      <AppButton
        title="Add Trophy"
        onPress={() => dispatch(addTrophy())}>
      </AppButton>
      <AppButton
        title="Remove Trophy"
        onPress={() => dispatch(removeTrophy())}>
      </AppButton>
      <AppText>Trophy Collection ({count})</AppText>
      <ScrollView>
        <View className={"flex-row flex-wrap"}>
          {trophyList}
        </View>
      </ScrollView>
    </View>
  )
}