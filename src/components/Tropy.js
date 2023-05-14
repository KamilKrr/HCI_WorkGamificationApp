import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppText from "./AppText";
const Trophy = ({ index }) => {
  const color = '#' + (Math.min(255, index * 7)).toString(16).padStart(2, '0') + '' + (Math.min(215, index * 7)).toString(16).padStart(2, '0') + '00';
  return (
    <View className={""}>
      <Icon className={"mr-2"} name="trophy" size={20 + index*3} color={color}></Icon>
    </View>
  )
}

export default Trophy;