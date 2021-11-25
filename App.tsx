import "react-native-gesture-handler";
import React from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// fonts
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { Provider } from "react-redux";

import store from "./src/store/store";
import StackNavigator from "./src/navigation/ShopNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "roboto-bold-italic": require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
    roboto: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "roboto-light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.log}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
  },
});
