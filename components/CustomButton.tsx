import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import CustomText from "./Text";

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  style?: ViewStyle;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = "white",
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={[{ ...styles.button, ...style }, { backgroundColor }]}
      onPress={onPress}
    >
      <CustomText color="white" size="SM" fontWeight="600">
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomButton;
