import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles/styles';
import { ImageViewer } from './components/ImageViewer';
import Button from './components/Button';

const placeholderImage = require('./assets/Noa.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Omega photo picker!</Text>
      <ImageViewer image={placeholderImage}/>
      <Button label={'Click to choose an image'} fn={()=>console.log("You've clicked a button >:>")}/>
      <Button label={'Continue'} fn={()=>console.log("You've continued!")}/>
      <StatusBar style="auto" />
    </View>
  );
}

