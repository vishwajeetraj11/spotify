import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { fontFamily, theme } from "../shared/constants";
import { RootTabScreenProps } from "../types";

export const Home = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  title: {
    fontFamily: fontFamily.Book,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
