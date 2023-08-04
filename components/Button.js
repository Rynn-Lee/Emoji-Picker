import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function Button({label, fn, primary, ico}){

  if(primary){
    return(
      <Pressable style={[styles.button, styles.buttonPrimary, `${ico ? `styles.buttonShort` : ""}`]} onPress={fn}>
      <FontAwesome
      name={ico}
      size={18}
      color="#252900"
      style={styles.buttonIcon}
      />
      <Text style={[styles.buttonText, styles.buttonTextPrimary]}>{label}</Text>
    </Pressable>
    )
  }


  return(
    <Pressable style={[styles.button, `${primary ? `styles.buttonPrimary` : ""}`, `${ico ? `styles.buttonShort` : ""}`]} onPress={fn}>
      {ico
      ? <>
      <FontAwesome
      name={ico}
      size={18}
      color="#fff"
      style={styles.buttonIcon}
      />
      </>
      :<></>}
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}