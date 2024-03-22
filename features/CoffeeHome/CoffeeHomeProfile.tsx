import CustomText from "components/Text";
import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

interface Props {
  location: string;
  profilePicture: string;
}

const CoffeeHomeProfile: FC<Props> = ({ location, profilePicture }) => {
  return (
    <View style={styles.header}>
      <View>
        <CustomText color="white" size="XXS" style={{ marginBottom: 4 }}>
          Location
        </CustomText>
        <View>
          <CustomText color="lightGray" size="XS">
            {location}
          </CustomText>
        </View>
      </View>
      <Image source={{ uri: profilePicture }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});

export default CoffeeHomeProfile;
