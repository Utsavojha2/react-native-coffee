import React from "react";
import Flex from "components/Flex";
import { Feather } from "@expo/vector-icons";
import Heart from "assets/svg/heart.svg";
import CustomText from "components/Text";
import RouteBackIcon from "components/RouteBackIcon";

const CoffeeDetailHeader = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justify="space-between"
      style={{ marginBottom: 29, marginTop: 16, paddingHorizontal: 30 }}
    >
      <RouteBackIcon />
      <CustomText size="BASE" color="black" fontWeight="600">
        Detail
      </CustomText>
      <Heart width={24} height={24} />
    </Flex>
  );
};

export default CoffeeDetailHeader;
