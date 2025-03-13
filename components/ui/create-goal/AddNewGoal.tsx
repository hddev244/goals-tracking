import React, { useEffect, useState } from "react";
import { ThemedView } from "../../ThemedView";
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import { ThemedText } from "../../ThemedText";
import DropdownSelection from "../DropdownSelection";
import ButtonGroup from "../../common/manual-platform/Button/ButtonGroup";
import {
  Button,
  variantStyle,
} from "../../common/manual-platform/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { Colors } from "@/constants/Colors";
import { IGoalRequest } from "@/types/goal.type";
import GoalService from "@/services/goal-service";
import { ResponseStatus } from "@/types/response.type";
import { setGoals } from "@/stores/slices/goalSlice";
import Input from "../Input";
import PickTime from "../PickTime";
import Card from "../Card/Card";
import { TASKS_TYPE } from "@/data/initdata";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import CardContent from "../Card/CardContent";

interface AddNewGoalModalProps {}

export default function AddNewGoal({}: AddNewGoalModalProps) {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const groups = useSelector((state: RootState) => state.group.groups);
  const goals = useSelector((state: RootState) => state.goal.goals);
  const theme = useColorScheme() ?? "light";
  const backgrouds = Colors[theme].goal;
  const [goalColor, setGoalColor] = useState(backgrouds[0]);
  const dispatch = useDispatch();

  function handleCreateGoal() {
    const goal: IGoalRequest = {
      name: "Thêm mới thói quen",
      description: "Test",
      groupId: 1,
      status: 0,
      canDelete: true,
      canEdit: true,
      deadline: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    GoalService.create(goal).then((res) => {
      if (res.status === ResponseStatus.CREATED) {
        if (!res.data) return;
        dispatch(setGoals([...goals, res.data]));
      }
    });
  }

  const { activeStep, selectedId } = useSelector(
    (state: RootState) => state.goalCreate
  );

  const [goalTypeSelected, setGoalTypeSelected] = React.useState<RadioButtonProps | null>(
    null
  );

  useEffect(() => {
    const taskType = TASKS_TYPE.find((task :RadioButtonProps) => task.id === selectedId) as RadioButtonProps;
    if (taskType) {
      setGoalTypeSelected(taskType);
    }
  }
  , [selectedId]);

  return (
    <ThemedView
      style={styles.centeredView}
      onStartShouldSetResponder={() => {
        setDropDownIsOpen(false);
        Keyboard.dismiss();
        return true;
      }}
    >
      <ThemedView style={{}}>
        <ScrollView
          style={{
            width: "100%",

          }}
        >
          <ThemedView
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
            }}
          >
            <ThemedView
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                backgroundColor: goalColor.background,
                padding: 20,
                borderRadius: 20,
              }}
            >
              <ThemedText
                style={[styles.modalTextTitle, { color: goalColor.color }]}
              >
                {goalTypeSelected?.label}
              </ThemedText>

              <Text
                style={{
                  color: goalColor.color,
                  fontSize: 80,
                  fontWeight: "bold",
                }}
              >
                {
                  goalTypeSelected?.icon
                }
              </Text>
              <Input
                style={{
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  textAlign: "start",
                  color: goalColor.color,
                  borderColor: goalColor.color,
                }}
                color={goalColor.color}
                placeholder="Nhập mục tiêu của bạn"
              />
              <ThemedView
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "transparent",
                }}
              >
                {backgrouds.map((goal, index) => (
                  <Pressable
                    onPress={() => setGoalColor(goal)}
                    key={index}
                    style={{
                      backgroundColor: goal.background,
                      display: "flex",
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: "white",
                      marginVertical: 5,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ThemedText
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                        textShadowColor: "black",
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                      }}
                    >
                      {goalColor === goal ? "✓" : ""}
                    </ThemedText>
                  </Pressable>
                ))}
              </ThemedView>
            </ThemedView>
            {/*
              nhắc nhở
              thời gian
              nhóm
            */}
            <ThemedView
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 30,
              }}
            >
              <Card
                style={{
                  borderColor: goalColor.background,
                  gap: 16,
                }}
              >
                <CardContent>
                  <DropdownSelection
                    isOpen={dropDownIsOpen}
                    setIsOpen={setDropDownIsOpen}
                    items={[
                      ...groups.map((group) => ({
                        label: group.name,
                        value: group.id,
                      })),
                      { label: "Thêm mới", value: -1 },
                    ]}
                    style={{
                      zIndex: 1000,
                    }}
                    placeholder="Chọn nhóm"
                    onChange={(value) => console.log(value)}
                    lable="Nhóm"
                  />
                  <PickTime />
                </CardContent>
              </Card>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "midnightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTextTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    width: "100%",
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
    flex: 1,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    textAlign: "center",
  },
  goalItem: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    padding: 16,
    alignItems: "center",
  },
  groupContainer: {
    width: "32%",
    backgroundColor: "rgba(253, 253, 253,  0.85)",
  },
  goalItemContainer: {
    backgroundColor: "white",
    width: "100%",
  },
  buttonBox: {
    padding: 14,
    alignItems: "center",
    backgroundColor: "rgba(253, 253, 253,  0.85)",
  },
});
