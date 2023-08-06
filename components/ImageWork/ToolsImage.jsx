import { View } from "react-native";
import Button from "../UI/Button";
import { styles } from "../../styles/styles";

export default function ToolsImage({showConfirmDialog, onReset, prevStep, onAddSticker, onSaveImageAsync}){
  return(
    <View style={[styles.ButtonsBox, styles.Horizontal, styles.ActionButtons]}>
      <Button fn={()=>showConfirmDialog([()=>onReset(), ()=>prevStep()])} ico={"arrow-left"}/>
      <Button ico={"rotate-left"} fn={()=>showConfirmDialog([()=>onReset()])}/>
      <Button primary ico={"plus"} fn={onAddSticker}/>
      <Button ico={"download"} fn={onSaveImageAsync}/>
    </View>
  )
}