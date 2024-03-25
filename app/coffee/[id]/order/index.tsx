import Flex from "components/Flex";
import Sep from "components/Sep";
import { useLocalSearchParams, useRouter } from "expo-router";
import CoffeeDeliveryAddress from "features/CoffeeOrder/CoffeeDeliveryAddress";
import CoffeeOrderAction from "features/CoffeeOrder/CoffeeOrderAction";
import CoffeeOrderHeader from "features/CoffeeOrder/CoffeeOrderHeader";
import CoffeeOrderType from "features/CoffeeOrder/CoffeeOrderType";
import CoffeePaymentSummary from "features/CoffeeOrder/CoffeePaymentSummary";
import CoffeeTotalOrders from "features/CoffeeOrder/CoffeeTotalOrders";
import { useCoffeeDetail } from "hooks/useCoffeeDetail";
import React, { Fragment, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CoffeeOrder = () => {
  const [orderType, setOrderType] = useState("delivery");
  const [totalOrders, setTotalOrders] = useState(1);

  const coffee = useCoffeeDetail();

  if (!coffee) return null;

  return (
    <Fragment>
      <SafeAreaView>
        <CoffeeOrderHeader />
      </SafeAreaView>

      <ScrollView>
        <View style={{ paddingHorizontal: 30, marginBottom: 140 }}>
          <Flex direction="column" alignItems="flex-start" gap={31}>
            <CoffeeOrderType value={orderType} onValueChange={setOrderType} />
            <CoffeeDeliveryAddress
              location="Jl. Kpg Sutoyo"
              streetAddress="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai."
            />
          </Flex>
          <Sep
            styles={{
              marginVertical: 20,
            }}
          />
          <CoffeeTotalOrders
            coffee={coffee}
            onChange={(value) => setTotalOrders((t) => t + value)}
            value={totalOrders}
          />
          <Sep
            styles={{
              marginVertical: 20,
            }}
          />
          <CoffeePaymentSummary />
        </View>
      </ScrollView>
      <CoffeeOrderAction onOrder={() => {}} />
    </Fragment>
  );
};

export default CoffeeOrder;
