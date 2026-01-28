import { useColorScheme as useNativeColorScheme } from "react-native";
import { Colors, ColorScheme } from "../constants/Colors";

export const useColorScheme = () => {
  const systemScheme = useNativeColorScheme();
  const colorScheme: ColorScheme = systemScheme === "dark" ? "dark" : "light";

  const colors = Colors[colorScheme];
  const isDark = colorScheme === "dark";

  return { colorScheme, colors, isDark };
};
