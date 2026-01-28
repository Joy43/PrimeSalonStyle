import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
const onboarding = [
  {
    id: 1,
    title: "Find & book top hair and beauty professionals",
    description:
      "√ Browse profiles, reviews, and portfolios to choose the perfect stylist for you.",
    image: require("../../assets/onbording/onbotfinh.png"),
  },
];

const OnboardingScreen = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        className="w-full p-5 items-end"
      >
        <Text className="text-gray-100 text-base font-semibold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 mx-1 bg-gray-200 rounded-full" />}
        activeDot={<View className="w-8 h-1 mx-1 bg-blue-500 rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex-1 items-center justify-center px-4"
          >
            <Image
              source={item.image}
              className="w-full h-80 object-contain"
              resizeMode="contain"
            />
            <Text className="text-gray-300 text-3xl font-bold text-center mt-2">
              {item.title}
            </Text>
            <Text className="text-gray-400 text-base text-center mt-4 leading-6">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <View className="px-5 pb-8">
        <TouchableOpacity
          onPress={() =>
            isLastSlide
              ? router.push("/(auth)/login")
              : swiperRef.current?.scrollBy(1)
          }
          className="w-full py-4 bg-white rounded-xl items-center"
        >
          <Text className="text-black text-base font-bold">
            {isLastSlide ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
