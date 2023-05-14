import store from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/sceens/HomeScreen";
import TrophiesScreen from "./src/sceens/TrophiesScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="Home">
        <Tab.Navigator screenOptions={{
          showIcon: true
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color} />
          }}/>
          <Tab.Screen name="Trophies" component={TrophiesScreen} options={{
            tabBarLabel: 'Trophies',
            tabBarIcon: ({color, size}) => <Icon name="trophy" size={size} color={color} />
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

