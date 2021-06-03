import React, { useEffect } from "react";
import SeriesScreen from "@series/screens/series-screen";

import SplashScreen from "react-native-splash-screen";
import { Platform } from "react-native";

export default function App() {
  useEffect(() => {
    if (Platform.OS == "android") {
      SplashScreen.hide();
    }
  }, []);
  return <SeriesScreen />;
}
