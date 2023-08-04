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
  const [showAppOption, setShowAppOptions] = useState(false)

  const pickImage = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled){
      setShowAppOptions(true)
      setPhoto(result.assets[0])
    }
    else{
      alert("You haven't picked any photo")
    }
  }

  const nextStep = () => {
    setShowAppOptions(true)
  }

  const reset = () => {
    setShowAppOptions(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Omega photo picker!</Text>
      <ImageViewer image={photo}/>
      {
        !showAppOption
        ? 
        <>
        <View style={styles.ButtonsBox}>
          <Button label={'Click to choose an image'} fn={pickImage} primary ico={"picture-o"}/>
          <Button label={'Use this Image'} fn={nextStep}/>
        </View>
        </>
        :
        <>
        <View style={[styles.ButtonsBox, styles.Horizontal]}>
          <Button fn={reset} ico={"arrow-left"}/>
          <Button ico={"rotate-left"}/>
          <Button primary ico={"plus"}/>
          <Button ico={"download"}/>
        </View>
        </>
      }
      <StatusBar style="auto" />
    </View>
  );
}

``