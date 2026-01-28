import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useColorScheme } from "../hook/Usecolorscheme";

export default function LoginScreen() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"client" | "stylist">("client");

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password, userType });
  };

  return (
    <SafeAreaView
      edges={["top"]}
      className="flex-1"
      style={{ backgroundColor: isDark ? "#171717" : "#ffffff" }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="px-6 py-8"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo/Brand */}
          <View className="items-center mb-8">
            <View
              className={`w-20 h-20 rounded-2xl items-center justify-center mb-4 ${
                isDark ? "bg-primary-400" : "bg-primary-500"
              }`}
            >
              <Ionicons name="cut" size={40} color="#ffffff" />
            </View>
            <Text
              className={`text-3xl font-bold ${isDark ? "text-white" : "text-neutral-900"}`}
            >
              PrimeSalon
            </Text>
            <Text
              className={`text-base mt-2 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
            >
              Premium Booking Platform
            </Text>
          </View>

          {/* User Type Selection */}
          <View className="flex-row mb-6 space-x-3">
            <Button
              onPress={() => setUserType("client")}
              title="Client"
              variant={userType === "client" ? "primary" : "outline"}
              fullWidth
              icon={
                <Ionicons
                  name="person-outline"
                  size={18}
                  color={
                    userType === "client"
                      ? "#ffffff"
                      : isDark
                        ? "#ffffff"
                        : "#171717"
                  }
                />
              }
            />
          
          </View>

          {/* Form */}
          <View className="mb-6">
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={isDark ? "#a3a3a3" : "#737373"}
                />
              }
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              leftIcon={
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={isDark ? "#a3a3a3" : "#737373"}
                />
              }
            />
          </View>

          {/* Login Button */}
          <Button
            onPress={handleLogin}
            title="Sign In"
            fullWidth
            size="lg"
            className="mb-4"
          />

          {/* Forgot Password */}
          <Button
            onPress={() => {}}
            title="Forgot Password?"
            variant="ghost"
            fullWidth
          />

          {/* Sign Up Link */}
          <View className="flex-row items-center justify-center mt-8">
            <Text
              className={`text-base ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
            >
              Don't have an account?{" "}
            </Text>
            <Button
              onPress={() => router.push("/(auth)/sign-up")}
              title="Sign Up"
              variant="ghost"
            />
          </View>

        
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
