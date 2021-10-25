import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iconUnicodes } from "../shared/constants";

interface IIconFont {
  name: string;
  color?: string;
  size?: number;
}

export const IconFont: React.FC<IIconFont> = ({ name, color, size }) => {
  return (
    <Text
      style={{
        fontFamily: "Spotify-Icon",
        color: color || "#ffffff",
        fontSize: size || 20,
      }}
    >
      {name}
    </Text>
  );
};
