import Flex from "components/Flex";
import CustomText from "components/Text";
import { Coffee } from "dummy/coffee-data";
import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
  View,
} from "react-native";
import AddSVG from "assets/svg/add.svg";
import MinusSVG from "assets/svg/minus.svg";
import MinusDisabledSVG from "assets/svg/minus-disabled.svg";

interface Props {
  coffee: Coffee;
  onChange: (value: number) => void;
  value: number;
}

const CoffeeTotalOrders: FC<Props> = ({ coffee, onChange, value }) => {
  return (
    <>
      <Flex direction="row" alignItems="center" justify="space-between">
        <Flex direction="row" alignItems="center" gap={11}>
          <View style={styles.imgWrapper}>
            <Image
              source={{ uri: coffee.image }}
              height={54}
              width={54}
              borderRadius={12}
            />
          </View>
          <Flex direction="column" alignItems="flex-start">
            <CustomText size="SM" color="black">
              {coffee.title}
            </CustomText>
            <CustomText size="XXS" color="dustyGray">
              with Chocolate
            </CustomText>
          </Flex>
        </Flex>
        <Flex direction="row" alignItems="center" gap={10}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (!value) return;
              onChange(-1);
            }}
          >
            <View style={styles.circle}>
              {value === 0 ? (
                <MinusDisabledSVG width={18} height={18} />
              ) : (
                <MinusSVG width={18} height={18} />
              )}
            </View>
          </TouchableWithoutFeedback>
          <CustomText size="SM" color="black" style={{ minWidth: 12 }}>
            {value}
          </CustomText>
          <TouchableWithoutFeedback
            onPress={() => {
              onChange(1);
            }}
          >
            <View style={styles.circle}>
              <AddSVG width={18} height={18} />
            </View>
          </TouchableWithoutFeedback>
        </Flex>
      </Flex>
    </>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    padding: 0,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CoffeeTotalOrders;
