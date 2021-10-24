import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import { fontFamily, theme } from "../../../shared/constants";

interface ISongCard {
  item: any;
}

const SongCard: React.FC<ISongCard> = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        overflow: "hidden",
        width: 150,
        borderRadius: 8,
      }}
    >
      <Image
        height={300}
        style={styles.image}
        source={{ uri: item.images[0].url }}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {item.name}
      </Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  description: {
    color: theme.gray,
    fontFamily: fontFamily.Medium,
    marginTop: 3,
    fontSize: 12,
  },
  title: { color: theme.white, fontFamily: fontFamily.Medium },
  image: {
    resizeMode: "cover",
    height: 150,
    width: 150,
    marginBottom: 16,
  },
});
