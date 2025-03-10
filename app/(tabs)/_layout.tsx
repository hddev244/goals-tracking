import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome6 } from "@expo/vector-icons";
import useGroup, { setGroups } from "@/stores/slices/groupSlice";
import GroupService from "@/services/group-service";
import GoalService from "@/services/goal-service";
import { useDispatch } from "react-redux";
import { RootState } from "@/stores/store";
import { setGoals } from "@/stores/slices/goalSlice";

export default function TabLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      await GroupService.getAll()
        .then((res) => {
          if (res.data) {
            dispatch(setGroups(res.data));
          }
        })
        .catch((err) => {
          console.log("err", err);
          dispatch(setGroups([]));
        })
      ;

      await GoalService.getAll()
        .then((res) => {
          if (res.data) {
            console.log("res.data", res.data);
            dispatch(setGoals(res.data));
          }
        })
        .catch((err) => {
          console.log("err", err);
          dispatch(setGoals([]));
        });
    };
    fetch();
  }, []);
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Công việc",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="list-check" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tracking"
        options={{
          title: "Theo dõi",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="chart-line" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Thông tin",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="info" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
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
