import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import cardImage from "../../../assets/card.png";
import card2Image from "../../../assets/card2.png";
import { SafeArea } from "../../components/safe-area";

const cardRatio = 637 / 1003;

export default function CardsScreen() {
  const rotation = useSharedValue(0);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1200 },
      { rotateY: `${interpolate(rotation.value, [0, 1], [0, 180])}deg` },
    ],
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1200 },
      { rotateY: `${interpolate(rotation.value, [0, 1], [180, 360])}deg` },
    ],
  }));

  function flipCard() {
    rotation.set(
      withTiming(rotation.get() === 0 ? 1 : 0, {
        duration: 650,
      }),
    );
  }

  return (
    <SafeArea className="flex-1 bg-[#f4f4f2]" edges={["top"]}>
      <View className="flex-1 px-5">
        <Text className="mt-2 text-3xl font-bold text-[#1e1e1d]">Id Cards</Text>
        <View className="flex-1 items-center justify-center">
          <Pressable
            accessibilityLabel="Student identity card"
            accessibilityHint="Double tap to flip the card"
            onPress={flipCard}
            style={styles.card}
          >
            <Animated.View style={[styles.face, frontStyle]}>
              <Image
                accessibilityLabel="Identity card"
                source={cardImage}
                style={styles.image}
              />
            </Animated.View>
            <Animated.View style={[styles.face, styles.backFace, backStyle]}>
              <Image
                accessibilityLabel="Student card"
                source={card2Image}
                style={styles.image}
              />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "92%",
    maxWidth: 400,
    aspectRatio: cardRatio,
    alignSelf: "center",
  },
  face: {
    ...StyleSheet.absoluteFill,
    backfaceVisibility: "hidden",
    overflow: "hidden",
    borderRadius: 24,
  },
  backFace: {
    transform: [{ rotateY: "180deg" }],
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
