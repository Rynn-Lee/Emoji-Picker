import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable, Alert } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from './styles/styles';
import * as ImagePicker from 'expo-image-picker'
import { ImageViewer } from './components/UI/ImageViewer';
import { useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import EmojiPicker from './components/Emoji/EmojiPicker';
import EmojiList from './components/Emoji/EmojiList';
import EmojiSticker from './components/Emoji/EmojiSticker';
import ChooseImage from './components/ImageWork/ChooseImage';
import ToolsImage from './components/ImageWork/ToolsImage';
import { captureRef } from 'react-native-view-shot';
import EditEmoji from './components/ImageWork/EditEmoji';

const placeholderImage = require('./assets/Noa.png')

export default function App() {
  const [photo, setPhoto] = useState(placeholderImage)
  const [showAppOption, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [pickedEmoji, setPickedEmoji] = useState([])
  const [emojiToEdit, setEmojiToEdit] = useState(null)
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();
  !status && requestPermission()

  const pickImage = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled){
      setShowAppOptions(true)
      setPhoto(result.assets[0])
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
  const resetToDefaultImage = () => setPhoto(placeholderImage)
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
    try{
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1
      })
      await MediaLibrary.saveToLibraryAsync(localUri)
      if(localUri){
        alert("Your edit has been saved!")
        setPhoto({uri: localUri})
        setPickedEmoji([])
        prevStep()
      }
    }
    catch(error){
      console.error(error)
    }
  }
  const addEmoji = (newEmoji) => {
    setPickedEmoji([...pickedEmoji, newEmoji])
    setEmojiToEdit(newEmoji)
  }

  const onRemove = (id) => {
    const filter = pickedEmoji.map((emoji) => emoji.id != id ? emoji : {})
    setPickedEmoji(filter)
    setEmojiToEdit(null)
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.TitleBar}>
        <Text style={styles.text}>Omega photo picker!</Text>
      </View>
      <View style={styles.Main}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer image={photo}/>
          
          {pickedEmoji
          ? pickedEmoji.map((emoji, index) => <EmojiSticker imageSize={40} stickerSource={emoji} key={index} setEmojiToEdit={setEmojiToEdit} emojiToEdit={emojiToEdit}/>)
          : null}
        </View>
      </View>
      <View style={styles.Bottom}>

      { !showAppOption
        ? <ChooseImage pickImage={pickImage} nextStep={nextStep} resetToDefaultImage={resetToDefaultImage}/>
        : !emojiToEdit
          ? <ToolsImage showConfirmDialog={showConfirmDialog} onReset={onReset} prevStep={prevStep} onAddSticker={onAddSticker} onSaveImageAsync={onSaveImageAsync}/>
          : <EditEmoji setEmojiToEdit={setEmojiToEdit} emojiToEdit={emojiToEdit} onRemove={onRemove}/>
      }

      { isModalVisible
        ? <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={addEmoji} onCloseModal={onModalClose}/>
          </EmojiPicker> : <></>
      }
      </View>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

``