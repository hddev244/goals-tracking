import React, { ReactElement, useEffect } from "react";
import Step from "./Step";
import { ThemedText } from "@/components/ThemedText";
import { ThemeContext } from "@react-navigation/native";
import { ThemedView } from "@/components/ThemedView";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";

interface StepsProps {
  children: React.ReactElement<typeof Step>[];
  activeStep?: number;
  onActiveStepChange?: (index: number) => void;
  style?: string;
  size?: "small" | "medium" | "large";
  bgColorActive?: string;
  textColorActive?: string;
  completedButtonTitle?: string;
  onCompletedButtonPress?: () => void;
}

export default function Steps(props: StepsProps) {
  const {
    children,
    activeStep = 0,
    style,
    size,
    bgColorActive = "red",
    textColorActive = "white",
    onActiveStepChange,
    completedButtonTitle,
    onCompletedButtonPress,
  } = props;
  const [currentStep, setCurrentStep] = React.useState(activeStep);
  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  const onChangeStep = (index: number) => {
    if (
      index === currentStep ||
      index > currentStep + 1 ||
      index < currentStep - 1
    ) {
      return;
    }
    if (index === currentStep + 1 || index === currentStep - 1) {
      setCurrentStep(index);
      onActiveStepChange?.(index);
    }
  };

  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        height: "100%",
        paddingVertical: 10,
      }}
    >
      {/* header */}
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
          }}
        >
          {" "}
        </Text>
        {children.map((step, index) => {
          return (
            <React.Fragment key={index + "-fragment"}>
              <Pressable
                key={index + "-step"}
                onPress={() => onChangeStep(index)}
                style={[
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: bgColorActive,
                    borderWidth: 2,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  },
                  currentStep === index || index < currentStep
                    ? {
                        backgroundColor: bgColorActive,
                      }
                    : {
                        backgroundColor: "white",
                      },
                  styles[size || "medium"],
                ]}
              >
                <ThemedText
                  style={{
                    color:
                      currentStep === index || index < currentStep
                        ? textColorActive
                        : bgColorActive,
                  }}
                  type="defaultSemiBold"
                >
                  {index + 1}
                </ThemedText>
              </Pressable>
              {index < children.length - 1 && (
                <>
                  <ThemedView
                    key={index + "-line"}
                    style={{
                      height: 2,
                      flex: 1,
                      backgroundColor: bgColorActive,
                    }}
                  />
                </>
              )}
            </React.Fragment>
          );
        })}
        <Text
          style={{
            flex: 1,
          }}
        ></Text>
      </ThemedView>
      {children.map((step, index) => {
        return (
          <ThemedView
            key={index}
            style={[
              {
                display: currentStep === index ? "flex" : "none",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex : 1,
              },
              styles.step,
            ]}
          >
            {React.cloneElement(step as ReactElement<any>, {
              key: index,
              isActive: index === currentStep,
              isCompleted: index < currentStep,
              onClick: () => setCurrentStep(index),
            })}
          </ThemedView>
        );
      })}
      <ThemedView style={{ display: "flex", flexDirection: "row" }}>
        <Pressable
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 10,
            right: 10,
            padding: 10,
            backgroundColor: bgColorActive,
            borderRadius: 10,
          }}
          onPress={() => {
            if (currentStep === children.length - 1) {
              onCompletedButtonPress?.();
            } else {
              setCurrentStep(currentStep + 1);
              onActiveStepChange?.(currentStep + 1);
            }
          }}
        >
          <ThemedText style={{ color: textColorActive }}>
            {currentStep === children.length - 1
              ? completedButtonTitle || "Hoàn thành"
              : "Tiếp theo"}
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
  step: {
    padding: 10,
    borderRadius: 5,
  },
  small: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  medium: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  large: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});
