import React, { PropsWithChildren } from "react";
import { Platform, StyleSheet, View } from "react-native";

const BottomFixedElement = (props: PropsWithChildren) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    backgroundColor: "#F9F9F9",
    ...(Platform.OS === "ios"
      ? {
          shadowColor: "#ccc",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
        }
      : {
          elevation: 10,
        }),
  },
});

export default BottomFixedElement;
