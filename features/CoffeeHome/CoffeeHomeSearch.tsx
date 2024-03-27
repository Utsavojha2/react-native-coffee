import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import CustomText from "components/Text";

interface Props {
  search: string;
  onChangeText: (value: string) => void;
}

const CoffeeHomeSearch: FC<Props> = ({ search, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <AntDesign name="search1" size={20} color="white" />
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={onChangeText}
        placeholder="Search coffee..."
        placeholderTextColor="#989898"
      />
      <View style={styles.filterBtn}>
        <MaterialIcons name="manage-search" size={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#313131",
    paddingVertical: 5,
    paddingLeft: 15,
    paddingRight: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 86,
  },
  input: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: "Sora",
    flex: 1,
    color: "#fff",
  },
  filterBtn: {
    padding: 12,
    backgroundColor: "#C67C4E",
    borderRadius: 12,
  },
});

export default CoffeeHomeSearch;
