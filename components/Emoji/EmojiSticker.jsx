import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { TapGestureHandler, PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource, setEmojiToEdit, emojiToEdit}){
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const zoomToggle = useSharedValue(0)
  const AnimatedView = Animated.createAnimatedComponent(View);
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY
    }
  })

  const onEmojiEdit  = () => setEmojiToEdit(stickerSource)

  const onZoom = useAnimatedGestureHandler({
    onActive: () => {
      if (!zoomToggle.value) {
        scaleImage.value = scaleImage.value * 2;
      }
      else{
        scaleImage.value = scaleImage.value / 2;
      }
      console.log("Before: ", zoomToggle.value, "Next: ", !zoomToggle.value)
      zoomToggle.value = !zoomToggle.value
    },
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  

  return(
    <View onTouchEnd={onEmojiEdit}>
      <PanGestureHandler onGestureEvent={onDrag}>
        <AnimatedView style={[containerStyle, styles.sticker,{ top: -150 }]}>
          <TapGestureHandler onGestureEvent={onZoom} numberOfTaps={2}>
            <AnimatedImage
              source={stickerSource.emoji}
              resizeMode="contain"
              style={[imageStyle ,{ width: imageSize, height: imageSize }]}
            />
          </TapGestureHandler>
        </AnimatedView>
      </PanGestureHandler>
    </View>
  )
}