import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, Alert } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from './styles/styles';
import * as ImagePicker from 'expo-image-picker'
import { ImageViewer } from './components/ImageViewer';
import Button from './components/Button';
import { useState } from 'react';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const placeholderImage = require('./assets/Noa.png')

export default function App() {
  const [photo, setPhoto] = useState(placeholderImage)
  const [showAppOption, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [pickedEmoji, setPickedEmoji] = useState([])

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

  const showConfirmDialog = (fn) => {
    return Alert.alert("Are you sure?", "All progress will be lost!",
    [
      {text: "Yes",
      onPress: () => fn.map((item) => item())
      },
      {
      text: "No"
      }
    ])
  }

  const nextStep = () => setShowAppOptions(true)
  const prevStep = () => setShowAppOptions(false)
  const onReset = () => {
    setPickedEmoji([])
  }
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {

  }
  const addEmoji = (newEmoji) => {
    setPickedEmoji([...pickedEmoji, newEmoji])
    console.log(pickedEmoji)
  }

  const onRemove = (id) => {
    const filter = pickedEmoji.filter((emoji) => emoji.id != id)
    setPickedEmoji(filter)
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.text}>Omega photo picker!</Text>
      <ImageViewer image={photo}/>
      {pickedEmoji !== null 
      ? pickedEmoji.map((emoji, index) => <EmojiSticker imageSize={40} stickerSource={emoji} key={index} showConfirmDialog={showConfirmDialog} onRemove={onRemove}/>)
      : null}
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
          <Button fn={()=>showConfirmDialog([()=>onReset(), ()=>prevStep()])} ico={"arrow-left"}/>
          <Button ico={"rotate-left"} fn={()=>showConfirmDialog([()=>onReset()])}/>
          <Button primary ico={"plus"} fn={onAddSticker}/>
          <Button ico={"download"} fn={onSaveImageAsync}/>
        </View>
        </>
      }
      {
        isModalVisible
        ? 
        <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
        >
          <EmojiList onSelect={addEmoji} onCloseModal={onModalClose}/>
        </EmojiPicker>
        :<></>
      }
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

``