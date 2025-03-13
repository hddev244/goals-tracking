import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

interface DropdownSelectionProps {
  placeholder: string;
  items: { value: any; label: string }[];
  onChange?: (value: string) => void;
  style?: any;
  lable?: string;
  direction?: "row" | "column";
  lightColor?: string;
  darkColor?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function DropdownSelection({
  placeholder = "Select an option",
  items,
  onChange,
  style = {},
  lable,
  direction = "row",
  lightColor,
  darkColor,
  isOpen,
  setIsOpen,
}: DropdownSelectionProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  ) as string;
  const [plh, setPlh] = useState(placeholder);
  const ref = React.useRef(null);

  return (
    <>
      <ThemedView style={[styles.container, styles[direction], style]}>
        {lable && <ThemedText

        style={styles.lable}>{lable}</ThemedText>}
        <TouchableOpacity
          onPress={() => setIsOpen?.(!isOpen)}
          style={[styles.button]}

        >
          <ThemedText>{plh}</ThemedText>
          <FontAwesome6 name="chevron-down" size={16} color="gray" />
        </TouchableOpacity>

        {isOpen && (
          <>
            <Modal
              transparent={true}
              visible={isOpen}
              presentationStyle="overFullScreen"
              animationType="fade"
              onRequestClose={() => setIsOpen(false)}
              style={{ backgroundColor: "red" }}
            >
              <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
                <View
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></View>
              </TouchableWithoutFeedback>
              <ThemedView
                onStartShouldSetResponder={() => true}
                style={[styles.dropdown, { backgroundColor }]}
              >
                <ThemedText
                  style={{
                    margin: 16,
                    fontSize: 22,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {lable} <FontAwesome6 name="layer-group" size={16} color="gray" />
                </ThemedText>
                <FlatList
                  data={items}
                  keyExtractor={(item) => item.value}
                  style={{ backgroundColor }}
                  renderItem={({ item }) => (
                    <ThemedView onStartShouldSetResponder={() => true}>
                      <TouchableOpacity
                        onPress={() => {
                          setPlh(item.label);
                          onChange?.(item.value);
                          setIsOpen?.(false);
                        }}
                        style={styles.item}
                      >
                        <ThemedText>{item.label}</ThemedText>
                      </TouchableOpacity>
                    </ThemedView>
                  )}
                />
              </ThemedView>
            </Modal>
          </>
        )}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
  },
  button: {
    height: 50,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    flexShrink: 1,
    padding: 10,
    elevation: 2, // Android shadow
    shadowColor: "#ddd", // iOS shadow
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  lable: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dropdown: {
    backgroundColor: "red",
    position: "absolute",
    width: "70%",
    maxHeight: "50%",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
