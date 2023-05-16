import store from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/sceens/HomeScreen";
import TrophiesScreen from "./src/sceens/TrophiesScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContextProvider} from "./src/context/ThemeContext";
import SettingsScreen from "./src/sceens/SettingsScreen";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from "nativewind";

export default function App() {
  const Stack = createStackNavigator();

  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <NavigationContainer initialRouteName="Home" theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeContextProvider>
  );
}

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      showIcon: true,
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color} />
      }}/>
      <Tab.Screen name="Trophies" component={TrophiesScreen} options={{
        tabBarLabel: 'Trophies',
        tabBarIcon: ({color, size}) => <Icon name="trophy" size={size} color={color} />
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({color, size}) => <Icon name="gear" size={size} color={color} />
      }}/>
    </Tab.Navigator>
  );
}