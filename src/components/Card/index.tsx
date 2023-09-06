import React from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Text, ViewToken } from "react-native";
import { styles } from "./styles";

interface CardProps {
  index: number;
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

const Card: React.FC<CardProps> = ({ index, viewableItems }) => {
  const opacityStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value.filter((item) => item.isViewable).find((item) => item.item === index)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0, {
        duration: 300,
      }),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6, {
            duration: 300,
          }),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[styles.container, opacityStyle]}>
      <Text>Hello! I'm a simple Card</Text>
    </Animated.View>
  );
};

export { Card };
