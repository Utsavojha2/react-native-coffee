import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Flex from "./Flex";
import CustomText from "./Text";
import CustomButton from "./CustomButton";

interface Props {
  options: Array<{
    id: string;
    name: string;
  }>;
  value: string;
  onValueChange: (id: string) => void;
}

const ButtonGroup: FC<Props> = ({ options, value, onValueChange }) => {
  return (
    <View style={styles.wrapper}>
      <Flex direction="row" alignItems="stretch">
        {options.map((option) => {
          const isSelected = option.id === value;
          if (isSelected) {
            return (
              <CustomButton
                title={option.name}
                onPress={() => onValueChange(option.id)}
                backgroundColor="#C67C4E"
                style={{ ...styles.child, borderRadius: 10 }}
              />
            );
          }
          return (
            <Pressable
              style={styles.child}
              onPress={() => onValueChange(option.id)}
            >
              <CustomText>{option.name}</CustomText>
            </Pressable>
          );
        })}
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 14,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  child: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonGroup;
