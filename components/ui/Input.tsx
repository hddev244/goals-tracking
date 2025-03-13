import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface InputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  style?: any;
  onChangeText?: (text: string) => void;
  label?: string; // Sửa lable -> label
  direction?: "row" | "column"; // Sửa derection -> direction
  keyboardType?: KeyboardTypeOptions;
  color ?: string;
}

export default function Input({
  placeholder,
  value,
  onChangeText,
  style = {}, // Tránh lỗi undefined
  label,
  direction = "column",
  keyboardType = "default",
  color,
}: InputProps) {
  return (
    <ThemedView style={[styles.container, styles[direction]]}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <View style={[styles.inputContainer, style]}>
        <TextInput
          style={[styles.input, { color: color }]}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={color}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    backgroundColor: "transparent",
    flexShrink: 1,
  },
  label: {
    // Sửa lable -> label
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    width: "100%",
    padding: 10,
    textAlignVertical: "top",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexWrap: "wrap",
  },
  input: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // Căn giữa theo chiều dọc
    gap: 10, // Khoảng cách giữa label và
  },
  column: {
    flexDirection: "column",
  },
});
