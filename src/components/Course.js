import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import AppSubText from "./AppSubText";
import AppText from "./AppText";
const Record = ({ course }) => {
  return (
    <View className={"flex-col m-2"}>
      <View>
        <Image
          className={"h-28 w-28 rounded"}
          source={course.cover ? {uri: course.cover } : null}
        />
      </View>
      <View>
        <AppSubText>
          {course.title}
        </AppSubText>
      </View>
    </View>
  )
}

export default Record;