import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import CustomText from "components/Text";

const image = require("assets/banner.png");

const CoffeeHomeBanner = () => {
  return (
    <View style={{ ...styles.banner, bottom: -80 }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        borderRadius={16}
        height={200}
        style={styles.img}
      >
        <View style={styles.bannerContent}>
          <View style={styles.bannerTag}>
            <CustomText size="XS" color="white" fontWeight="bold">
              Promo (dev build)
            </CustomText>
          </View>
          <View style={styles.bannerHeading}>
            <CustomText
              size="XL"
              color="white"
              fontWeight="600"
              lineHeight={40}
            >
              Buy one, get
            </CustomText>

            <CustomText
              size="XXL"
              color="white"
              fontWeight="600"
              lineHeight={40}
            >
              one free
            </CustomText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: "absolute",
    left: 25,
    right: 25,
    bottom: -80,
  },
  img: {
    height: 140,
  },
  bannerContent: {
    paddingHorizontal: 24,
    paddingTop: 13,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 16,
  },
  bannerTag: {
    backgroundColor: "#ED5151",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  bannerHeading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bannerHeadingBg: {
    height: 23,

    paddingRight: 10,
  },
  textContainer: {
    marginTop: -18,
  },
});

export default CoffeeHomeBanner;
