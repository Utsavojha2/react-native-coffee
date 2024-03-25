import React, { Fragment } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Sep from "components/Sep";
import CoffeeDetailContent from "features/CoffeeDetail/CoffeeDetailContent";
import CoffeeDetailDescription from "features/CoffeeDetail/CoffeeDetailDescription";
import CoffeeDetailHeader from "features/CoffeeDetail/CoffeeDetailHeader";
import CoffeeDetailPurchase from "features/CoffeeDetail/CoffeeDetailPurchase";
import { useLocalSearchParams } from "expo-router";
import { COFFEE_DATA } from "dummy/coffee-data";
import { useCoffeeDetail } from "hooks/useCoffeeDetail";

const CoffeeDetailPage = () => {
  const coffee = useCoffeeDetail();

  return (
    <Fragment>
      <SafeAreaView>
        <CoffeeDetailHeader />
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <CoffeeDetailContent
            image={coffee?.image || ""}
            rating={4.8}
            totalRatings={243}
            title={coffee?.title || ""}
          />
          <Sep
            styles={{
              marginTop: 28,
              marginBottom: 20,
            }}
          />
          <CoffeeDetailDescription description={coffee?.description || ""} />
        </View>
      </ScrollView>
      {coffee && <CoffeeDetailPurchase coffee={coffee} />}
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
