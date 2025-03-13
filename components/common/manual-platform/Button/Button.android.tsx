import { Pressable, StyleSheet, Text } from "react-native";
import { ButtonProps, variantStyle } from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";


const ButtonAndroid = ({ onPress, title, style, linerGradient = [" #4facfe", " #00f2fe", "#0066cc"] ,variant = 'primary'}: ButtonProps) => {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? styles.pressed : null, style]}
    >
      {({ pressed }) => (
        <LinearGradient
          // Button Linear Gradient
          colors={variantStyle[variant].colors}
          style={styles.button}
          start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}

        >
          <ThemedText
            style={[styles.text]}
          >
            {title}
          </ThemedText>
        </LinearGradient>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    borderRadius: 18,

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
