import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
  Platform,
  ScrollView,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { Button } from "@/components/common/manual-platform/Button/Button";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import { shareAsync } from "expo-sharing";
import FileService from "../../../services/file-service";
import { IGroup } from "@/types/group.type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { IGoal, IGoalRequest } from "@/types/goal.type";
import GoalService from "@/services/goal-service";
import { ResponseStatus } from "@/types/response.type";
import { setGoals } from "@/stores/slices/goalSlice";
import DropdownSelection from "@/components/ui/DropdownSelection";
import { ThemedText } from "@/components/ThemedText";
import Input from "@/components/ui/Input";
import { Colors } from "../../../constants/Colors";
import ButtonGroup from "@/components/common/manual-platform/Button/ButtonGroup";
import { Variant } from "../../../components/common/manual-platform/Button/Button";
import { useColorScheme } from "react-native";
import AddNewGoalModal from "@/components/ui/create-goal/AddNewGoal";
import ButtonNavigate from "@/components/common/ButtonNavigate";
import Steps from "@/components/ui/Step/Steps";
import CreateGoalPage from "@/components/ui/create-goal";

const Page = () => {
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);
  const [listGoals, setListGoals] = useState<IGoal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const groups = useSelector((state: RootState) => state.group.groups);
  const goals = useSelector((state: RootState) => state.goal.goals);
  const dispatch = useDispatch();
  const [stepActive, setStepActive] = useState(0);

  const [selectedId, setSelectedId] = useState<string | null>("3");

  useEffect(() => {
    if (!groups || !goals) return;
    if (selectedGroup) {
      setListGoals(goals.filter((goal) => goal?.groupId === selectedGroup.id));
    } else {
      setListGoals(goals);
    }
  }, [groups, goals, selectedGroup]);

  const windownWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <>
      <CreateGoalPage />
    </>
  );
};

export default Page;

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
  modalView: {
    width: "100%",
    height: "100%",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
