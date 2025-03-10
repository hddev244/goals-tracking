import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface DropdownSelectionProps {
  placeholder: string;
  items: ItemTypes[];
  onChange?: (value: string) => void;
  style?: any;
}

interface ItemTypes {
  value: string;
  label: string;
}

export default function DropdownSelection({
  placeholder = "Select an option",
  items,
  onChange,
  style = {},
}: DropdownSelectionProps) {
  const [plh, setPlh] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.button}
      >
        <Text>{plh}</Text>
        <FontAwesome6 name="chevron-down" size={16} color="gray" />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setPlh(item.label);
                  setIsOpen(false);
                  onChange?.(item.value);
                }}
                style={styles.item}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdown: {
    position: "absolute",
    top: "100%", // Gắn vào bottom của container
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    zIndex: 10,
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
});
