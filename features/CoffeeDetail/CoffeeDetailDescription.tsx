import Flex from "components/Flex";
import CustomText from "components/Text";
import TruncatedText from "components/TruncatedText";
import React, { FC, useState } from "react";
import { LayoutChangeEvent, StyleSheet, TouchableOpacity } from "react-native";
import { TEXT_SIZES } from "theme/colors";

interface Props {
  description: string;
}

const CoffeeDetailDescription: FC<Props> = ({ description }) => {
  const [sizesWidth, setSizesWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setSizesWidth(width);
  };

  return (
    <Flex direction="column" alignItems="flex-start" gap={22}>
      <Flex direction="column" alignItems="flex-start" gap={15}>
        <CustomText size="SM" color="black">
          Description
        </CustomText>
        <TruncatedText
          text={description}
          linesToTruncate={3}
          textProps={{
            color: "dustyGray",
            size: "XS",
            lineHeight: 1.64 * TEXT_SIZES["XS"],
          }}
          toggleProps={{
            color: "primary",
            size: "XS",
            lineHeight: 1.64 * TEXT_SIZES["XS"],
          }}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="flex-start"
        gap={12}
        onLayout={handleLayout}
        width="100%"
        style={styles.sizesContainer}
      >
        <CustomText size="SM" color="black">
          Size
        </CustomText>
        <Flex direction="row" alignItems="stretch" gap={14}>
          {["S", "M", "L"].map((size, i) => {
            const isActive = i === 1;
            return (
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: isActive ? "#FFF5EE" : "#FFFFFF",
                    borderWidth: 1,
                    borderColor: !isActive ? "#DEDEDE" : "#C67C4E",
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",

                    padding: 10,
                    width: (sizesWidth - 28) / 3,
                  },
                ]}
              >
                <CustomText
                  color={isActive ? "primary" : "dark"}
                  size="XS"
                  fontWeight="600"
                >
                  {size}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  sizesContainer: {
    marginBottom: 130,
  },
});

export default CoffeeDetailDescription;
