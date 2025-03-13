import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
  Platform
} from "react-native";
import { useState, useEffect } from "react";
import { Button } from "@/components/common/manual-platform/Button/Button";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";

const App = () => {
  const windownWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (

      <View style={styles.container}>
      <ThemedText>Theo dõi</ThemedText>
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer : {
    flex: 1,
    backgroundColor: "lightblue",
},
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
