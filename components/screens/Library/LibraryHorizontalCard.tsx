import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { width } from "../../../constants/Layout";
import { fontFamily, theme } from "../../../shared/constants";

interface Library {
  library: any;
}

const LibraryHorizontalCard: React.FC<Library> = ({ library }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginBottom: 16,
        alignItems: "center",
      }}
    >
      <Image
        style={{
          height: 80,
          width: 80,
          resizeMode: "cover",
          marginRight: 16,
        }}
        source={{ uri: library.images[0].url }}
      />
      <View style={{ width: width * 0.7 }}>
        <Text
          lineBreakMode="tail"
          style={{
            color: theme.white,
            fontSize: 16,
            marginBottom: 5,
            fontFamily: fontFamily.Book,
          }}
        >
          {library.name}
        </Text>
        <Text
          style={{
            color: theme.gray,
            fontSize: 14,
            fontFamily: fontFamily.Book,
            textTransform: "capitalize",
          }}
        >
          Playlist: {library.owner.displayName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LibraryHorizontalCard;

const styles = StyleSheet.create({});
