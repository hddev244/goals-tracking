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
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import { IGroup } from "@/types/group.type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { IGoal, IGoalRequest } from "@/types/goal.type";
import { ThemedText } from "@/components/ThemedText";
import ButtonNavigate from "@/components/common/ButtonNavigate";

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);
  const [listGoals, setListGoals] = useState<IGoal[]>([]);
  const groups = useSelector((state: RootState) => state.group.groups);
  const goals = useSelector((state: RootState) => state.goal.goals);
  const dispatch = useDispatch();

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
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.groupContainer}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={groups}
            renderItem={({ item }) => (
              <View
                style={[
                  {
                    display: "flex",
                    flexDirection: "row",
                  },
                  item.id === selectedGroup?.id && {
                    backgroundColor: "rgba(253, 253, 253,  0.85)",
                    boxShadow: "5px 0px 6px 0 rgba(0, 130, 252, 0.1)",
                  },
                ]}
                key={item.id}
              >
                <Pressable
                  style={styles.button}
                  onPress={() => setSelectedGroup(item)}
                >
                  <ThemedText
                    style={[
                      styles.text,
                      item.id === selectedGroup?.id && {
                        textShadowColor: "white",
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </ThemedText>
                </Pressable>
                <LinearGradient
                  colors={
                    item.id === selectedGroup?.id
                      ? ["#7F7FD5", "#86A8E7", "#91EAE4"]
                      : ["rgba(136, 198, 255, 0.1)", "rgba(136, 198, 255, 0.1)"]
                  }
                  style={{
                    borderColor: "#c3cfe2",
                  }}
                >
                  <ThemedText></ThemedText>
                </LinearGradient>
              </View>
            )}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            style={styles.goalItemContainer}
            horizontal={false}
            keyExtractor={(item) => item.id.toString()}
            data={listGoals}
            renderItem={({ item }) => (
              <View style={styles.goalItem} key={item.id}>
                <LinearGradient
                  colors={["#7F7FD5", "#86A8E7", "#91EAE4"]}
                  style={{
                    borderColor: "#c3cfe2",
                    width: 12,
                    height: 12,
                    borderRadius: 8,
                  }}
                >
                  <ThemedText></ThemedText>
                </LinearGradient>
                <View>
                  <ThemedText>{item.name}</ThemedText>
                  <ThemedText>
                    {item.description} {item.canDelete ? "delete" : ""}
                  </ThemedText>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.buttonBox}>
        <ButtonNavigate
          title="Thêm mục tiêu của riêng bạn"
          icon={FontAwesome6.Plus}
          to="/create-goal/create"
        />
      </View>
    </View>
  );
};

export default App;

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
