import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function Button({label, fn}){
  return(
    <Pressable style={styles.button} onPress={fn}>
      <FontAwesome
      name="picture-o"
      size={18}
      color="#2529e"
      style={styles.ButtonIcon}
      />
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}