import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontFamily } from "../shared/constants";

interface Font {
  children: string;
}

export const Bold: React.FC<Font> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontFamily: fontFamily.Bold,
  },
});
