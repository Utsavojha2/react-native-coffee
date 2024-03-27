import React, { useState } from "react";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COFFEE_DATA, COFFEE_LIST } from "dummy/coffee-data";
import CoffeeCategories from "features/CoffeeHome/CoffeeCategories";
import CoffeeHomeBanner from "features/CoffeeHome/CoffeeHomeBanner";
import CoffeeHomeProfile from "features/CoffeeHome/CoffeeHomeProfile";
import CoffeeHomeSearch from "features/CoffeeHome/CoffeeHomeSearch";
import CoffeeListView from "features/CoffeeHome/CoffeeListView";

const CoffeeHome = () => {
  const [searchText, setSearchText] = useState("");

  const coffeeList = searchText
    ? COFFEE_DATA.filter((c) => {
        return c.title.toLowerCase().includes(searchText.toLowerCase());
      })
    : COFFEE_DATA;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topWrapper}>
            <CoffeeHomeProfile
              location="Boston, Massachusetts"
              profilePicture="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            />
            <CoffeeHomeSearch
              search={searchText}
              onChangeText={setSearchText}
            />
            <CoffeeHomeBanner />
          </View>
          <View style={styles.bottomWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CoffeeCategories
                categories={COFFEE_LIST}
                selectedCategory="Cappucino"
                onCategorySelect={() => {}}
              />
            </ScrollView>
          </View>
          <View style={styles.coffeeListWrapper}>
            <CoffeeListView
              coffeeList={coffeeList.map((c) => ({
                ...c,
                name: c.title,
                price: 4.53,
              }))}
              onSeeDetails={(id) => {
                router.push(`/coffee/${id}`);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  topWrapper: {
    backgroundColor: "#000000",
    paddingTop: 18,
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 22,
  },
  bottomWrapper: {
    marginTop: 105,
    paddingLeft: 25,
    marginBottom: 29,
  },
  coffeeListWrapper: {
    paddingHorizontal: 25,
    width: "100%",
  },
});

export default CoffeeHome;
