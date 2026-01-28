import { Tabs } from "expo-router";
import { Home, Newspaper, SpellCheck, User } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? "#22c55e" : "#9ca3af"} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused }) => (
            <Newspaper color={focused ? "#22c55e" : "#9ca3af"} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="Appointments"
        options={{
          tabBarIcon: ({ focused }) => (
            <SpellCheck color={focused ? "#22c55e" : "#9ca3af"} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <User color={focused ? "#22c55e" : "#9ca3af"} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
