import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

interface Stylist {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
}

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const popularServices = [
    { id: "1", name: "Hair", icon: "💇" },
    { id: "2", name: "Tattoo", icon: "✒️" },
    { id: "3", name: "Lashes", icon: "👁️" },
    { id: "4", name: "Brows", icon: "✨" },
  ];

  const topStylists: Stylist[] = [
    {
      id: "1",
      name: "Devon James",
      location: "Brooklyn, NY",
      rating: 4.9,
      price: 48,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      id: "2",
      name: "Sarah Mitchell",
      location: "Manhattan, NY",
      rating: 5.0,
      price: 55,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
  ];

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View
        className="bg-black px-5 pb-5"
        style={{ paddingTop: insets.top + 10 }}
      >
        {/* Header Top */}
        <View className="flex-row justify-between items-center mb-5">
          {/* User Info */}
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://i.pravatar.cc/100?img=1" }}
              className="w-[50px] h-[50px] rounded-xl mr-3"
            />
            <View>
              <Text className="text-xs text-gray-500 mb-0.5">
                Welcome Back!
              </Text>
              <Text className="text-base font-bold text-white">
                Robert S. Cota
              </Text>
            </View>
          </View>

          {/* Notification Button */}
          <TouchableOpacity className="w-11 h-11 rounded-xl bg-[#1a1a1a] justify-center items-center">
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-[#1a1a1a] rounded-xl px-4 h-[50px]">
          <Ionicons name="search" size={20} color="#666" className="mr-2.5" />
          <TextInput
            className="flex-1 text-sm text-white"
            placeholder="Search Stylist and Services..."
            placeholderTextColor="#666"
          />
          <TouchableOpacity className="w-9 h-9 rounded-lg bg-blue-500 justify-center items-center ml-2.5">
            <Ionicons name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Popular Services */}
        <View className="mt-6 px-5">
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
                  <Text className="text-3xl">{service.icon}</Text>
                </View>
                <Text className="text-xs text-white font-medium">
                  {service.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* --------- Top Rated Stylist ------------ */}
        <View className="mt-6 px-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-white">
              Top Rated Stylist
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue-500 font-semibold">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {topStylists.map((stylist) => (
              <TouchableOpacity
                key={stylist.id}
                className="rounded-2xl bg-[#1a1a1a] overflow-hidden mr-4"
                style={{ width: width * 0.55 }}
              >
                {/* Stylist Image */}
                <View className="relative">
                  <Image
                    source={{ uri: stylist.image }}
                    className="w-full h-[240px] bg-gray-700"
                  />

                  {/* Rating Badge */}
                  <View className="absolute top-3 left-3 flex-row items-center bg-black/60 px-2 py-1 rounded-xl">
                    <Ionicons name="star" size={12} color="#FFD700" />
                    <Text className="text-white text-xs font-semibold ml-1">
                      {stylist.rating}
                    </Text>
                  </View>

                  {/* Favorite Button */}
                  <TouchableOpacity className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 justify-center items-center">
                    <Ionicons name="heart-outline" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>

                {/* Stylist Info */}
                <View className="p-3">
                  <Text className="text-base font-bold text-white mb-1">
                    {stylist.name}
                  </Text>
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="location-sharp" size={12} color="#0084FF" />
                    <Text className="text-xs text-gray-500 ml-1">
                      {stylist.location}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Text className="text-xs text-gray-500 mr-1">From</Text>
                    <Text className="text-base font-bold text-blue-500">
                      ${stylist.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
