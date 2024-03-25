import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";

export default function Layout() {
  const [loaded, error] = useFonts({
    Sora: require("../assets/font/Sora.ttf"),
    
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}
