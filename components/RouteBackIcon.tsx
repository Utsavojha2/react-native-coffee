import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const RouteBackIcon = () => {
  return (
    <TouchableWithoutFeedback onPress={router.back}>
      <Feather name="chevron-left" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
};

export default RouteBackIcon;
