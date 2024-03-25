import Flex from "components/Flex";
import React from "react";
import { Feather } from "@expo/vector-icons";
import CustomText from "components/Text";
import { router } from "expo-router";
import RouteBackIcon from "components/RouteBackIcon";

const CoffeeOrderHeader = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      style={{ marginBottom: 29, marginTop: 16, paddingHorizontal: 30 }}
    >
      <RouteBackIcon />
      <Flex alignItems="center" justify="center" flex={1}>
        <CustomText size="BASE" color="black" fontWeight="600">
          Order
        </CustomText>
      </Flex>
    </Flex>
  );
};

export default CoffeeOrderHeader;
