import React, {useContext} from 'react';
import Container from "../components/Container";
import AppButton from "../components/AppButton";
import {ThemeContext} from "../context/ThemeContext";
const HomeScreen = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <AppButton
        title="Toggle dark mode"
        onPress={themeContext.toggleColorScheme}>
      </AppButton>
    </Container>
  )
}

export default HomeScreen;