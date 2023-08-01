import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles/styles';
import * as ImagePicker from 'expo-image-picker'
import { ImageViewer } from './components/ImageViewer';
import Button from './components/Button';
import { useState } from 'react';

const placeholderImage = require('./assets/Noa.png')

export default function App() {
  const [photo, setPhoto] = useState(placeholderImage)

  const pickImage = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled){
      setPhoto(result.assets[0].uri)
      console.log(result)
    }
    else{
      console.log("You haven't picked any photo")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Omega photo picker!</Text>
      <ImageViewer image={photo}/>
      <Button label={'Click to choose an image'} fn={pickImage} primary/>
      <Button label={'Continue'} fn={()=>console.log("You've continued!")}/>
      <StatusBar style="auto" />
    </View>
  );
}

