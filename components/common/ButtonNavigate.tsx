import { FontAwesome6 } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  StyleProp,
  Text,
  TextStyle,
  FlexAlignType,
  StyleSheet,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "../ThemedText";

interface ButtonNavigateProps {
  to: Href;
  title: string;
  icon?: typeof FontAwesome6;
  style?: StyleProp<TextStyle>;
  size?: 48 | 64 | 96 | 128;
}

export default function ButtonNavigate({
  to,
  icon,
  style,
  size = 48,
  title,
}: ButtonNavigateProps) {
  console.log("ButtonNavigate: to", to);
  return (
    <Link href={to} style={[style]}>
      <LinearGradient
        colors={["#7F7FD5", "#86A8E7", "#91EAE4"]}
        style={[
          styles.container,
        ]}
      >
        <View style={styles.innerContainer}><ThemedText>{title}{icon}</ThemedText></View>
      </LinearGradient>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#7f7fd5",
    borderWidth: 2,
    boxShadow : "0 0 10px rgba(0, 0, 0, 0.5)",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
