import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

interface FlexProps extends ViewProps {
  children: React.ReactNode;
  direction?: ViewStyle["flexDirection"];
  justify?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  flex?: ViewStyle["flex"];
  gap?: ViewStyle["gap"];
  wrap?: ViewStyle["flexWrap"];
  width?: ViewStyle["width"];
}

const Flex: React.FC<FlexProps> = ({
  children,
  style,
  direction = "row",
  justify = "flex-start",
  alignItems = "center",
  flex,
  wrap,
  gap,
  width,
  ...otherProps
}) => {
  return (
    <View
      style={[
        { flexDirection: direction },
        { justifyContent: justify },
        { alignItems: alignItems },
        { flex: flex ?? undefined },
        { flexWrap: wrap ?? undefined },
        { gap: gap ?? undefined },
        { width: width ?? undefined },

        style,
      ]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

export default Flex;
