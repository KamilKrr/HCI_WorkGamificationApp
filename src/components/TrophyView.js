import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTrophy, removeTrophy } from '../redux/trophySlice';
import AppButton from './AppButton';
import AppText from "./AppText";

export function TrophyView() {
  const count = useSelector((state) => state.trophy.value)
  const dispatch = useDispatch()

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
      <AppText>Trophies: {count}</AppText>
    </View>
  )
}