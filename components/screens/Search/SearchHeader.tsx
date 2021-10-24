import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { width } from "../../../constants/Layout";
import { fontFamily, iconNames, theme } from "../../../shared/constants";
import { Icon } from "../../Icon";
import { Search } from "../../Svgs";

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <View style={styles.searchContainer}>
        <Search height={24} width={24} />
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text style={styles.searchLabel}>Artists, songs, or podcasts</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    color: theme.white,
    fontFamily: fontFamily.Bold,
    fontSize: 32,
  },
  searchLabel: {
    fontFamily: fontFamily.Black,
    borderRadius: 8,
    marginLeft: 8,
    color: theme.darkGray,
    paddingHorizontal: 8,
  },
  searchContainer: {
    width: width - 32,
    backgroundColor: theme.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
  },
});
