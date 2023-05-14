import { Text, View } from 'react-native';
import store from './src/redux/store'
import { Provider } from 'react-redux'
import {TrophyView} from "./src/components/TrophyView";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center bg-white">
        <TrophyView />
      </View>
    </Provider>
  );
}
