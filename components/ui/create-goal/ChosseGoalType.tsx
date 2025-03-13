import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TASKS_TYPE } from "@/data/initdata";
import React, { useMemo, useEffect, useRef } from "react";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent";
import {
  FlatList,
  Pressable,
  Text,
  useWindowDimensions,
  Animated,
  Easing,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { setActiveStep, setSelectedId } from "@/stores/slices/goalCreateSlice";

type TaskTypeListProps = {};

export default function ChosseGoalType(props: TaskTypeListProps) {
  const tasksType = useMemo(() => TASKS_TYPE, []);
  const dispatch = useDispatch();
  const width = useWindowDimensions().width;
  const { selectedId } = useSelector(
    (state: RootState) => state.goalCreate
  );
  console.log("selectedId", selectedId);
  // Animation viền chạy quanh Card
  const borderAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(borderAnim, {
        toValue: 1,
        duration: 2000, // Thời gian hoàn thành 1 vòng chạy
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
    return () => {
      borderAnim.stopAnimation();
    };
  }, [selectedId]);

  // Tạo màu viền dựa trên giá trị animation
  const borderColorInterpolation = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ff0000", "#0000ff"], // Chạy từ đỏ -> xanh lá -> xanh dương
  });

  return (
    <ThemedView
      style={{
        flex: 4,
        marginHorizontal: "auto",
        width: width - 20,
      }}
    >
      <FlatList
        data={tasksType}
        numColumns={2}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedId === item.id;
          return (
            <Animated.View
              style={[
                {
                  flex: 2,
                  margin: "1%",
                  width: "48%",
                  borderRadius: 12,
                  padding: isSelected ? 3 : 1, // Tạo khoảng cách viền
                  borderWidth: isSelected ? 3 : 1, // Viền dày hơn khi chọn
                  borderColor: isSelected
                    ? borderColorInterpolation
                    : item.borderColor, // Viền động khi được chọn
                },
              ]}
            >
              <Card
                key={item.id}
                style={{
                  backgroundColor: item.borderColor,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <CardContent
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Pressable
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                    }}
                    onPress={() => {
                      dispatch(setSelectedId(item.id));
                      dispatch(setActiveStep(1));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 48,
                        marginBottom: 10,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </Text>
                    <ThemedText
                      style={{
                        fontSize: 18,
                        color: item.color,
                        fontWeight: "bold",
                        textShadowColor: "rgba(0, 0, 0, 0.4)",
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 10,
                      }}
                    >
                      {item.label}
                    </ThemedText>
                  </Pressable>
                </CardContent>
              </Card>
            </Animated.View>
          );
        }}
      />
    </ThemedView>
  );
}
