import { View } from "react-native";
import Button from "../UI/Button";
import { styles } from "../../styles/styles";

export default function ChooseImage({pickImage, nextStep, resetToDefaultImage}){
  return(
    <View style={[styles.ButtonsBox]}>
    <Button label={'Reset'} fn={resetToDefaultImage} ico={"circle"}/>
      <Button label={'New Image'} fn={pickImage} primary ico={"picture-o"}/>
      <Button label={'Use this Image'} fn={nextStep} ico={"arrow-right"}/>
    </View>
  )
}