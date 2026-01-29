import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Popularservice = () => {
  const { width } = Dimensions.get("window");

  const popularServices = [
    {
      id: "1",
      name: "Hair",
      icon: require("../../../assets/logo.jpg"),
    },
    {
      id: "2",
      name: "Tattoo",
      icon: require("../../../assets/logo.jpg"),
    },
  ];

  return (
    <SafeAreaProvider>
      <View className="mt-6 px-5">
        <Pressable className="mb-4">
          <Text className="text-sm text-blue-500 font-semibold">See All</Text>
        </Pressable>
        <Text className="text-xl font-bold text-white mb-4">
          Popular Services
        </Text>
        <View className="flex-row justify-between">
          {popularServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              className="items-center"
              style={{ width: (width - 60) / 4 }}
            >
              <View className="w-[60px] h-[60px] rounded-2xl bg-[#1a1a1a] justify-center items-center mb-2">
                <Image
                  source={service.icon}
                  style={{ width: 24, height: 24 }}
                />
              </View>
              <Text className="text-xs text-white font-medium">
                {service.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Popularservice;
