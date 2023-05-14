import React from 'react';
import { View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTrophy, removeTrophy } from '../redux/trophySlice';
import Button from './Button';

export function TrophyView() {
  const count = useSelector((state) => state.trophy.value)
  const dispatch = useDispatch()

  return (
    <View>
      <Button
        title="Add Trophy"
        onPress={() => dispatch(addTrophy())}>
      </Button>
      <Button
        title="Remove Trophy"
        onPress={() => dispatch(removeTrophy())}>
      </Button>
      <Text>Trophies: {count}</Text>
    </View>
  )
}