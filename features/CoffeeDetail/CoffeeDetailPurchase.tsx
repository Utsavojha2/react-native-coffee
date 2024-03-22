import React from "react";
import { StyleSheet, View } from "react-native";
import BottomFixedElement from "components/BottomFixedElement";
import CustomButton from "components/CustomButton";
import Flex from "components/Flex";
import CustomText from "components/Text";
import { router } from "expo-router";

const CoffeeDetailPurchase = () => {
  return (
    <BottomFixedElement>
      <View style={styles.content}>
        <Flex
          direction="row"
          alignItems="flex-start"
          justify="space-between"
          width="100%"
        >
          <Flex direction="column" alignItems="flex-start" gap={8}>
            <CustomText size="XS" color="dustyGray">
              Price
            </CustomText>
            <CustomText size="BASE" color="primary">
              $ 4.53
            </CustomText>
          </Flex>
          <CustomButton
            title="Buy Now"
            onPress={() => {
              router.push("/coffee/1/order");
            }}
            backgroundColor="#C67C4E"
            style={{
              paddingVertical: 17.5,
              paddingHorizontal: 72,
              borderRadius: 16,
            }}
          />
        </Flex>
      </View>
    </BottomFixedElement>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingLeft: 35,
    paddingVertical: 21,
    paddingRight: 18,
  },
});

export default CoffeeDetailPurchase;
