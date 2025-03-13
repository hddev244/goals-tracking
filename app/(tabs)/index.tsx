import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack, useNavigation } from "expo-router";
import CircleButtonNavigate from "@/components/common/CircleButtonNavigate";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button } from "@/components/common/manual-platform/Button/Button";
import DropdownSelection from "@/components/ui/DropdownSelection";
import Input from "@/components/ui/Input";
import Steps from "@/components/ui/Step/Steps";
import Step from "@/components/ui/Step/Step";
const TasksScreen = () => {
  const windownWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Steps
        activeStep={0}
        size="medium"
        bgColorActive="#FF6347"
        textColorActive="#fff"
      >
        <Step>
          <Text>Step 1</Text>
        </Step>
        <Step>
          <Text>Step 2</Text>
        </Step>
        <Step>
          <Text>Step 3</Text>
        </Step>
      </Steps>
      <CircleButtonNavigate
        to={"/create-goal"}
        size={64}
        icon={<FontAwesome6 name="plus" size={28} color="white" />}
        style={{
          position: "absolute",
          bottom: 25,
          right: 25,
        }}
      />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
});
