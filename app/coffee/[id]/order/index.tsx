import Flex from "components/Flex";
import Sep from "components/Sep";
import { useLocalSearchParams, useRouter } from "expo-router";
import CoffeeDeliveryAddress from "features/CoffeeOrder/CoffeeDeliveryAddress";
import CoffeeOrderHeader from "features/CoffeeOrder/CoffeeOrderHeader";
import CoffeeOrderType from "features/CoffeeOrder/CoffeeOrderType";
import React, { Fragment, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CoffeeOrder = () => {
  const [orderType, setOrderType] = useState("delivery");
  const {  } = useLocalSearchParams()

  return (
    <Fragment>
      <SafeAreaView>
        <CoffeeOrderHeader />
      </SafeAreaView>

      <View style={{ paddingHorizontal: 30 }}>
        <Flex direction="column" alignItems="flex-start" gap={31}>
          <CoffeeOrderType value={orderType} onValueChange={setOrderType} />
          <CoffeeDeliveryAddress
            location="Jl. Kpg Sutoyo"
            streetAddress="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai."
          />
        </Flex>
        <Sep
          styles={{
            marginTop: 15,
            marginBottom: 31,
          }}
        />

      </View>
    </Fragment>
  );
};

export default CoffeeOrder;
