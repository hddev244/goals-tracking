import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { LinearGradient } from "expo-linear-gradient";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import { openDB } from "@/sqlite-database";
// import PushNotification from "react-native-push-notification";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
// // Cấu hình thông báo
// const configureNotification = () => {
//   PushNotification.configure({
//     onNotification: (notification: any) => {
//       console.log("NOTIFICATION:", notification);
//     },
//     requestPermissions: true,
//   });
// };

// // Gửi thông báo
// const sendNotification = (message: string) => {
//   PushNotification.localNotification({
//     title: "Nhắc nhở",
//     message: message,
//     playSound: true,
//     soundName: "default",
//   });
// };
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [alarms] = useState(["08:00", "12:30", "18:00"]);

  // useEffect(() => {
  //   configureNotification();

  //   // Kiểm tra thời gian mỗi phút
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
  //       now.getMinutes()
  //     ).padStart(2, "0")}`;

  //     if (alarms.includes(currentTime)) {
  //       sendNotification(`Đến giờ: ${currentTime}`);
  //     }
  //   }, 60000); // Kiểm tra mỗi phút

  //   return () => clearInterval(interval);
  // }, [alarms]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    openDB();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerBlurEffect: colorScheme === "dark" ? "dark" : "light",
            // headerBackground: () => (
            //   <LinearGradient
            //     // Button Linear Gradient
            //     colors={["#7F7FD5", "#86A8E7", "#91EAE4",'transparent']}
            //     style={{ flex: 1 }}
            //   />
            // ),
            // headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {/* Optionally configure static options outside the route.*/}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(no_on_tabs_bar)/create-goal/index"
            options={{ title: "Thêm mục tiêu" }}
          />
          <Stack.Screen
            name="(no_on_tabs_bar)/create-goal/create"
            options={{ title: "Tạo mục tiêu của bạn" }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
