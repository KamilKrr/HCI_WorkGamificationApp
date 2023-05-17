import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

const AnimatedText = ({ text, classes, animationFinishedCallback }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index > text.length) {
        clearInterval(timer);
        console.log("here");
        animationFinishedCallback();
      }

      setCurrentText((prevText) => prevText + text.charAt(index));
      index++;
    }, 45);

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, [text]); // Add 'text' as a dependency

  return (
    <Text className={"text-zinc-900 dark:text-white text-base font-medium tracking-tight " + classes}>
      {currentText}
    </Text>
  );
};

export default AnimatedText;
