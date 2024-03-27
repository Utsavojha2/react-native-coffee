import Flex from "components/Flex";
import CustomText from "components/Text";
import React, { FC, Fragment, useState } from "react";
import {
  Image,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Coffee {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface Props {
  coffeeList: Array<Coffee>;
  onSeeDetails: (id: number) => void;
}

const CoffeeListView: FC<Props> = ({ coffeeList, onSeeDetails }) => {
  const [viewWidth, setViewWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

  return (
    <Fragment>
      <Flex
        direction="row"
        wrap="wrap"
        alignItems="stretch"
        gap={8}
        onLayout={handleLayout}
        style={{ marginBottom: 20 }}
      >
        {coffeeList.map((coffee) => {
          return (
            <CoffeeListItem
              key={coffee.id}
              coffee={coffee}
              onSeeDetails={onSeeDetails}
              cardWidth={(viewWidth - 8) / 2}
            />
          );
        })}
      </Flex>
    </Fragment>
  );
};

const CoffeeListItem: FC<{
  coffee: Coffee;
  onSeeDetails: (id: number) => void;
  cardWidth: number;
}> = ({ coffee, onSeeDetails, cardWidth }) => {
  return (
    <View
      style={{
        ...styles.cardWrapper,
        width: cardWidth,
      }}
    >
      <Flex direction="column" alignItems="flex-start" gap={8}>
        <Image
          source={{ uri: coffee.image }}
          style={styles.cardImg}
          resizeMode="cover"
          height={132}
        />
        <View style={styles.cardContent}>
          <Flex direction="column" alignItems="flex-start" gap={15}>
            <Flex direction="column" alignItems="flex-start" gap={4}>
              <CustomText color="black" size="SM" fontWeight="600">
                {coffee.name}
              </CustomText>
              <CustomText color="dustyGray" size="XXS" fontWeight="400">
                with Chocolate
              </CustomText>
            </Flex>
            <Flex
              direction="row"
              alignItems="flex-start"
              justify="space-between"
              style={{ width: "100%", paddingRight: 15 }}
            >
              <CustomText color="black" fontWeight="600">
                $ {coffee.price.toFixed(2)}
              </CustomText>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => onSeeDetails(coffee.id)}
              >
                <View style={styles.viewCoffeeBtn}>
                  <Entypo name="plus" size={16} color="white" />
                </View>
              </TouchableOpacity>
            </Flex>
          </Flex>
        </View>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 4,
    paddingBottom: 12,
    borderRadius: 16,
    backgroundColor: "#F4F4F4",
  },
  cardImg: {
    borderRadius: 12,
    width: "100%",
  },
  cardContent: {
    width: "100%",
    paddingLeft: 15,
  },
  viewCoffeeBtn: {
    padding: 10,
    backgroundColor: "#C67C4E",
    borderRadius: 10,
  },
});

export default CoffeeListView;
