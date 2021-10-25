import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { width } from "../../../constants/Layout";
import { fontFamily } from "../../../shared/constants";

interface ISearch {
  search: any;
}

const SearchCard: React.FC<ISearch> = ({ search }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        backgroundColor: search.color,
        height: 100,
        width: width / 2 - 24,
        marginBottom: 16,
        overflow: "hidden",
        position: "relative",
        paddingTop: 12,
        paddingLeft: 8,
      }}
    >
      <Text
        style={{
          fontFamily: fontFamily.Bold,
          width: 100,
          color: "#ffffff",
          fontSize: 15,
        }}
      >
        {search.title}
      </Text>
      <Image
        style={{
          height: 80,
          width: 80,
          position: "absolute",
          resizeMode: "cover",
          bottom: 0,
          right: -20,
          transform: [
            {
              rotate: "25deg",
            },
          ],
        }}
        source={{ uri: search.imageUrl }}
      />
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({});
