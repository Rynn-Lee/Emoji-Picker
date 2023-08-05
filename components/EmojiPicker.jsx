import { styles } from "../styles/styles";
import { Modal, View, Text, Pressable } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function EmojiPicker({ children, isVisible, onClose }){
  return(
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  )
}