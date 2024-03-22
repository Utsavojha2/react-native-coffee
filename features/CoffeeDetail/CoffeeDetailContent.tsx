import Flex from "components/Flex";
import CustomText from "components/Text";
import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import StarSVG from "assets/svg/star.svg";
import Sep from "components/Sep";
import TruncatedText from "components/TruncatedText";
import { TEXT_SIZES } from "theme/colors";

interface Props {
  image: string;
  title: string;
  rating: number;
  totalRatings: number;
}

const beanImg = require("assets/bean.png");
const packageImg = require("assets/milk.png");

const CoffeeDetailContent: FC<Props> = ({
  image,
  title,
  rating,
  totalRatings,
}) => {
  return (
    <>
      <Flex direction="column" alignItems="flex-start" gap={20}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.coverImage}
        />
        <Flex direction="column" alignItems="flex-start" gap={8}>
          <CustomText size="MD" color="black">
            {title}
          </CustomText>
          <Flex
            direction="row"
            alignItems="center"
            justify="space-between"
            width="100%"
          >
            <Flex direction="column" alignItems="flex-start" gap={8}>
              <CustomText size="XXS" color="dustyGray">
                with Chocolate
              </CustomText>
              <Flex direction="row" gap={4}>
                <StarSVG width={20} height={20} />
                <Flex direction="row" alignItems="flex-end" gap={3}>
                  <CustomText size="SM" color="black" lineHeight={20}>
                    {rating}
                  </CustomText>
                  <CustomText size="XXS" color="mediumGray" lineHeight={20}>
                    ({totalRatings})
                  </CustomText>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="row" alignItems="center" gap={15}>
              <View style={styles.imgWrapper}>
                <Image source={beanImg} resizeMode="cover" />
              </View>
              <View style={styles.imgWrapper}>
                <Image source={packageImg} resizeMode="cover" />
              </View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: "100%",
    height: 226,
    borderRadius: 16,
  },
  imgWrapper: {
    backgroundColor: "#FFF0F0",
    padding: 10,
    borderRadius: 14,
  },
});

export default CoffeeDetailContent;
