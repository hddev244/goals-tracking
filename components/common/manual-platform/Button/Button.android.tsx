import { Pressable, StyleSheet, Text } from "react-native";
import { ButtonProps } from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
const ButtonAndroid = ({ onPress, title, style, linerGradient = ["#7F7FD5", "#86A8E7", "#91EAE4"] }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? styles.pressed : null, style]}
    >
      {({ pressed }) => (
        <LinearGradient
          // Button Linear Gradient
          colors={[...linerGradient]}
          style={styles.button}
        >
          <Text
            style={[styles.text]}
          >
            {title}
          </Text>
        </LinearGradient>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    boxShadow: "0px 2px 2px  rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgb(113, 132, 155)",

  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.18)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: "bold",
    color : "white",
  },
});

export default ButtonAndroid;
