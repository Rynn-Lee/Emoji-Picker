import { View } from "react-native";
import { styles } from "../../styles/styles";
import Button from "../UI/Button";

export default function EditEmoji({setEmojiToEdit, emojiToEdit, onRemove}){
  return(
    <View style={[styles.ButtonsBox, styles.Horizontal, styles.ActionButtons]}>
      <Button fn={()=>setEmojiToEdit(null)} ico={"arrow-left"} primary/>
      <Button ico={"trash"} fn={()=>onRemove(emojiToEdit.id)}/>
    </View>
  )
}