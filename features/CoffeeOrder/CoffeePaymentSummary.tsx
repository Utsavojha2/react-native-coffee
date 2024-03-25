import Flex from "components/Flex";
import React from "react";
import { StyleSheet, View } from "react-native";
import DiscountSVG from "assets/svg/discount.svg";
import CustomText from "components/Text";
import { Feather } from "@expo/vector-icons";
import Sep from "components/Sep";

const CoffeePaymentSummary = () => {
  return (
    <Flex direction="column" alignItems="flex-start" gap={21}>
      <View style={styles.discountWrapper}>
        <Flex direction="row" alignItems="center" justify="space-between">
          <Flex direction="row" alignItems="center" gap={12}>
            <DiscountSVG width={20} height={20} />
            <CustomText size="XS" color="black">
              1 Discount is applied
            </CustomText>
          </Flex>
          <Feather name="chevron-right" size={20} color="black" />
        </Flex>
      </View>
      <View style={styles.summarySection}>
        <Flex direction="column" alignItems="flex-start" gap={9}>
          <CustomText size="SM" color="black">
            Payment Summary
          </CustomText>
          <Flex direction="column" alignItems="flex-start" gap={14}>
            <Flex
              direction="row"
              alignItems="center"
              justify="space-between"
              width="100%"
            >
              <CustomText size="XS" color="black">
                Price
              </CustomText>
              <CustomText fontWeight="bold" size="XS" color="black">
                $ 4.53
              </CustomText>
            </Flex>
            <Flex
              direction="row"
              alignItems="center"
              justify="space-between"
              width="100%"
            >
              <CustomText size="XS" color="black">
                Delivery Fee
              </CustomText>
              <CustomText fontWeight="bold" size="XS" color="black">
                <CustomText
                  size="XS"
                  color="black"
                  style={{ textDecorationLine: "line-through" }}
                >
                  $2.0
                </CustomText>
                &nbsp;&nbsp;$ 1.25
              </CustomText>
            </Flex>
          </Flex>
        </Flex>
        <Sep
          styles={{
            marginTop: 20,
            marginBottom: 14,
          }}
        />
        <Flex
          direction="row"
          alignItems="center"
          justify="space-between"
          width="100%"
        >
          <CustomText size="XS" color="black">
            Total Payment
          </CustomText>
          <CustomText fontWeight="bold" size="XS" color="black">
            $ 5.53
          </CustomText>
        </Flex>
      </View>
    </Flex>
  );
};

const styles = StyleSheet.create({
  discountWrapper: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    padding: 16,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#F0F0F0",
  },
  summarySection: {},
});

export default CoffeePaymentSummary;
