import Image from 'react-native-scalable-image';
import { styles } from '../styles/styles';
import { Dimensions } from 'react-native';

export function ImageViewer({image}){
  const dimensions = Dimensions.get('window');

  return(
    <Image source={image} style={styles.image} width={dimensions.width}/>
  )
}