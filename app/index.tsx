import CustomText from "components/Text";
import { AntDesign } from "@expo/vector-icons";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";

const image = require("assets/auth.png");

export default function Page() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imgContainer} />
      <View style={styles.slotContainer}>
        <View style={styles.container}>
          <View style={styles.introWrapper}>
            <View style={styles.introHeading}>
              <CustomText
                color="white"
                size="XXL"
                lineHeight={50}
                style={{
                  textAlign: "center",
                }}
              >
                Coffee so good, your taste buds will love it.
              </CustomText>
            </View>
            <View style={styles.introDescription}>
              <CustomText
                color="darkGray"
                size="XS"
                style={{
                  textAlign: "center",
                }}
                lineHeight={22}
              >
                The best grain, the finest roast, the powerful flavor.
              </CustomText>
            </View>

            <View>
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => {
                  router.replace("/home");
                }}
              >
                <AntDesign name="google" size={28} color="gray" />
                <CustomText size="MD" color="dark" opacity={0.54}>
                  Continue with Google
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#000000",
  },
  introHeading: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  introWrapper: {
    paddingRight: 30,
    paddingLeft: 28,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    gap: 18,
  },
  introDescription: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  imgContainer: {
    flex: 0.6,
    resizeMode: "cover",
    width: "100%",
  },
  slotContainer: {
    flex: 0.4,
  },
  signInButton: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    gap: 10,
    borderRadius: 10,
  },
});
