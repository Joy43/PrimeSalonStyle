import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./global.css";
import { useColorScheme } from "./hook/Usecolorscheme";
import { persistor, store } from "./redux/store";

export default function RootLayout() {
  const { isDark } = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        }
        persistor={persistor}
      >
        <SafeAreaView
          style={{ flex: 1, backgroundColor: isDark ? "#000000" : "#ffffff" }}
        >
          <StatusBar style={isDark ? "light" : "dark"} />

          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="(start)" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(root)" />
            <Stack.Screen name="(client)" />
            <Stack.Screen name="(stylist)" />
            <Stack.Screen name="booking" />
          </Stack>

          <Toast />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
