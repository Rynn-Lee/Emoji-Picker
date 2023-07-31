import { Image } from "react-native-web";
import { styles } from '../styles/styles';

export function ImageViewer({image}){
  return(
    <Image source={image} style={styles.image}/>
  )
}