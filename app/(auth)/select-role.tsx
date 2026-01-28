import { router } from "expo-router";
import { ArrowLeft, ServerCog, User2Icon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SelectRole = () => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top"]}>
      {/* -------- Back button ------------ */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-10 left-4 z-10 p-2 rounded-full bg-neutral-800"
        activeOpacity={0.8}
      >
        <ArrowLeft size={24} color="white" />
      </TouchableOpacity>

      {/* --------- Content-------------- */}
      <View className="flex-1 justify-center px-6">
        {/* Role cards */}
        <View className="flex-row gap-4">
          {/* ---------- Client  -------------*/}
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.85}
            className="flex-1  bg-neutral-900 border hover:bg-blue-500 border-fuchsia-50 rounded-2xl p-6 items-center"
          >
            <User2Icon size={28} color="white" />
            <Text className="text-white text-base font-semibold mt-4">
              Client
            </Text>
          </TouchableOpacity>

          {/* ------ Stylist  -------*/}
          <TouchableOpacity
            onPress={() => {router.push("/(root)/(tabs)/Home")}}
            activeOpacity={0.85}
            className="flex-1 bg-neutral-900 border border-fuchsia-50  hover:bg-blue-500 rounded-2xl p-6 items-center"
          >
            <ServerCog size={28} color="white" />
            <Text className="text-white text-base font-semibold mt-4">
              Stylist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectRole;
