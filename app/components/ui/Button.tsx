import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  className = "",
}) => {
  const baseClasses =
    "rounded-xl flex-row items-center justify-center active:opacity-80";

  const variantClasses = {
    primary:
      "bg-primary-500 shadow-lg shadow-primary-500/30",
    secondary:
      "bg-neutral-800",
    outline:
      "border border-neutral-700 bg-transparent",
    ghost:
      "bg-transparent",
    danger:
      "bg-red-500 shadow-lg shadow-red-500/30",
  };

  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const textVariantClasses = {
    primary: "text-white",
    secondary: "text-neutral-100",
    outline: "text-neutral-100",
    ghost: "text-primary-400",
    danger: "text-white",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const disabledClass = disabled || loading ? "opacity-50" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${widthClass} ${className}`}
    >
      {loading ? (
        <ActivityIndicator className="text-white" />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <Text
            className={`${textVariantClasses[variant]} ${textSizeClasses[size]} font-semibold`}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};
