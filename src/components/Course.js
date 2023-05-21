import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppSubText from './AppSubText';

const Record = ({ course, navigation }) => {
  const startCourse = () => {
    navigation.navigate('CoursePreferences', {
      courseID: course.id,
    });
  };

  return (
    <TouchableOpacity onPress={startCourse}>
      <View className={'flex-col m-2'}>
        <View>
          <Image className={'h-28 w-28 rounded'} source={course.cover} />
        </View>
        <View>
          <AppSubText>{course.title}</AppSubText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Record;
