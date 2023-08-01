import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function Button({label, fn, primary}){

  if(primary){
    return(
      <Pressable style={[styles.button, styles.buttonPrimary]} onPress={fn}>
      <FontAwesome
      name="picture-o"
      size={18}
      color="#2529e"
      style={styles.buttonIcon}
      />
      <Text style={[styles.buttonText, styles.buttonTextPrimary]}>{label}</Text>
    </Pressable>
    )
  }


  return(
    <Pressable style={[styles.button, `${primary ? `styles.buttonPrimary` : ""}`]} onPress={fn}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}