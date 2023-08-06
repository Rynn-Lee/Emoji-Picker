import { Image, Platform, Pressable } from "react-native";
import { FlatList } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import { uniqueID } from "../../utils/uniqueID";

export default function EmojiList({onSelect, onCloseModal}){
  const [emojis] = useState([
    require('../../assets/Emojis/emoji1.png'),
    require('../../assets/Emojis/emoji2.png'),
    require('../../assets/Emojis/emoji3.png'),
    require('../../assets/Emojis/emoji4.png'),
    require('../../assets/Emojis/emoji5.png'),
    require('../../assets/Emojis/emoji6.png'),
  ])

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emojis}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect({emoji: item, id: uniqueID()});
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.emojiImage} />
          </Pressable>
        );
      }}
    />
  )
}