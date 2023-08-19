import React from "react";
import Animated from "react-native-reanimated";
import { Text } from "react-native";

const Card: React.FC = () => {
  return (
    <Animated.View>
      <Text>Hello! I'm a simple Card</Text>
    </Animated.View>
  );
};

export { Card };
