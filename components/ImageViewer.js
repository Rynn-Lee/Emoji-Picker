import { Image } from "react-native";
import { styles } from '../styles/styles';

export function ImageViewer({image}){
  return(
    <Image source={image} style={styles.image}/>
  )
}