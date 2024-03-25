import Flex from "components/Flex";
import CustomText from "components/Text";
import React, { FC } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

interface Props {
  location: string;
  streetAddress: string;
}

const CoffeeDeliveryAddress: FC<Props> = ({ location, streetAddress }) => {
  return (
    <Flex direction="column" alignItems="flex-start" gap={14}>
      <CustomText size="SM" color="black">
        Delivery Address
      </CustomText>
      <CustomText size="XS" color="black">
        {location}
      </CustomText>
      <Flex direction="column" alignItems="flex-start" gap={9}>
        <CustomText size="XXS" color="mediumGray">
          {streetAddress}
        </CustomText>
        <Flex direction="row" alignItems="stretch" gap={8}>
          <View style={styles.btn}>
            <FontAwesome5 name="edit" size={14} color="black" />
            <CustomText
              size="XXS"
              style={{
                color: "#303336",
              }}
            >
              Edit Address
            </CustomText>
          </View>
          <View style={styles.btn}>
            <Ionicons name="document-text-outline" size={14} color="black" />
            <CustomText
              size="XXS"
              style={{
                color: "#303336",
              }}
            >
              Add Note
            </CustomText>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#FFFFFF",
  },
});

export default CoffeeDeliveryAddress;
