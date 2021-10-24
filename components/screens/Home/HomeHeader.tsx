import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fontFamily, iconNames, theme } from "../../../shared/constants";
import { Icon } from "../../Icon";
import Settings from "../../Svgs";

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good afternoon</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Icon name={iconNames.HISTORY} size={25} color={theme.white} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }}>
          <Settings height={30} width={30} strokeColor={"#ffffff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  greeting: {
    color: theme.white,
    fontFamily: fontFamily.Black,
    fontSize: 22,
  },
});
