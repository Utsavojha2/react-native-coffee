import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  styles?: ViewStyle;
}

const Sep: FC<Props> = ({ styles }) => {
  return <View style={[rootStyles.sep, styles]} />;
};

const rootStyles = StyleSheet.create({
  sep: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
  },
});

export default Sep;
