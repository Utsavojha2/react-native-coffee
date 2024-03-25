import React, { FC } from "react";
import BottomFixedElement from "components/BottomFixedElement";
import { StyleSheet, View } from "react-native";
import Flex from "components/Flex";
import CashSVG from "assets/svg/money.svg";
import SettingsSVG from "assets/svg/settings.svg";
import CustomText from "components/Text";
import CustomButton from "components/CustomButton";

interface Props {
  onOrder: () => void;
}

const CoffeeOrderAction: FC<Props> = ({ onOrder }) => {
  return (
    <BottomFixedElement>
      <View style={styles.content}>
        <Flex direction="column" gap={17} alignItems="stretch">
          <Flex direction="row" alignItems="flex-start" justify="space-between">
            <Flex direction="row" alignItems="flex-start" gap={22}>
              <CashSVG width={20} height={20} />
              <Flex direction="row" alignItems="center" gap={10}>
                <View style={styles.cashBtn}>
                  <CustomText size="XXS" color="white">
                    Cash
                  </CustomText>
                </View>
                <CustomText size="XXS" color="black">
                  $ 5.53
                </CustomText>
              </Flex>
            </Flex>
            <SettingsSVG width={20} height={20} />
          </Flex>
          <CustomButton
            title="Order"
            onPress={() => onOrder()}
            backgroundColor="#C67C4E"
            style={{ borderRadius: 16 }}
          />
        </Flex>
      </View>
    </BottomFixedElement>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  cashBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#C67C4E",
  },
});

export default CoffeeOrderAction;
