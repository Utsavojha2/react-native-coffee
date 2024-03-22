import React, { Fragment } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Sep from "components/Sep";
import CoffeeDetailContent from "features/CoffeeDetail/CoffeeDetailContent";
import CoffeeDetailDescription from "features/CoffeeDetail/CoffeeDetailDescription";
import CoffeeDetailHeader from "features/CoffeeDetail/CoffeeDetailHeader";
import CoffeeDetailPurchase from "features/CoffeeDetail/CoffeeDetailPurchase";

const CoffeeDetailPage = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <CoffeeDetailHeader />
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <CoffeeDetailContent
            image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            rating={4.8}
            totalRatings={243}
            title="Caffe Latte"
          />
          <Sep
            styles={{
              marginTop: 28,
              marginBottom: 20,
            }}
          />
          <CoffeeDetailDescription description="A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foA cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foA cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foden." />
        </View>
      </ScrollView>
      <CoffeeDetailPurchase />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
  },
});

export default CoffeeDetailPage;
