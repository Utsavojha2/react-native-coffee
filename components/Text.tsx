import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TextProps as NativeTextProps,
} from "react-native";
import { TEXT_COLORS, TEXT_SIZES } from "theme/colors";

export interface TextProps extends NativeTextProps {
  children: React.ReactNode;
  color?: keyof typeof TEXT_COLORS;
  size?: keyof typeof TEXT_SIZES;
  lineHeight?: number;
  style?: TextStyle;
  opacity?: number;
  fontWeight?: TextStyle["fontWeight"];
}

const CustomText: React.FC<TextProps> = ({
  children,
  color = "black",
  size = "BASE",
  style,
  lineHeight,
  opacity,
  fontWeight,
  ...props
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: "Sora",
      fontSize: TEXT_SIZES[size],
      lineHeight: lineHeight ?? undefined,
      color: TEXT_COLORS[color],
      opacity: opacity ?? 1,
      fontWeight: fontWeight ?? undefined,
      ...style,
    },
  });

  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
