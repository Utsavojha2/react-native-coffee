import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import CustomText from "./Text";

interface Props extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  isActive: boolean;
  isLastItem: boolean;
}

const CategoryButton: FC<Props> = ({
  onPress,
  title,
  isActive,
  isLastItem,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        otherProps.style,
        {
          backgroundColor: isActive ? "#C67C4E" : "#F3F3F3",
          marginRight: isLastItem ? 20 : 0,
        },
      ]}
      {...otherProps}
    >
      <CustomText
        size="XS"
        style={{
          color: isActive ? "white" : "#2F4B4E",
        }}
        fontWeight="600"
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
    paddingVertical: 10,
    paddingHorizontal: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
