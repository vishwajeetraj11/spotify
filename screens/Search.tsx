import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchCard from "../components/screens/Search/SearchCard";
import SearchHeader from "../components/screens/Search/SearchHeader";
import { width } from "../constants/Layout";
import { fontFamily, theme } from "../shared/constants";

export const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SearchHeader />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 16,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.Medium,
            color: "#ffffff",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Browse All
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {React.Children.toArray(
            browseAll.map((search) => <SearchCard search={search} />)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.darkestGray,
  },
});

const browseAll = [
  {
    title: "Podcasts",
    viewId: null,
    pageId: "search",
    href: "/genre/podcasts-web",
    color: "#27856A",
    imageUrl:
      "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
  },
  {
    title: "Made For You",
    viewId: null,
    pageId: "search",
    href: "/genre/made-for-x-hub",
    color: "#1E3264",
    imageUrl: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
  },
  {
    title: "Charts",
    viewId: null,
    pageId: "search",
    href: "/genre/browse-charts-tab",
    color: "#8D67AB",
    imageUrl:
      "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
  },
  {
    title: "New Releases",
    viewId: null,
    pageId: "search",
    href: "/genre/new-releases-page",
    color: "#E8115B",
    imageUrl:
      "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    title: "Discover",
    viewId: null,
    pageId: "search",
    href: "/genre/discover-page",
    color: "#8D67AB",
    imageUrl: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
  },
  {
    title: "Concerts",
    viewId: null,
    pageId: "search",
    href: "/concerts",
    color: "#1E3264",
    imageUrl: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
  },
  {
    title: "COVID-19 Guide",
    viewId: "corona_news_podcasts-page",
    pageId: "search",
    color: "#509bf5",
    imageUrl:
      "https://i.scdn.co/image/0e121a9a02c17d6703e7c12ba0c704166f9afac9",
  },
  {
    title: "EQUAL",
    viewId: "equal-page",
    pageId: "search",
    color: "#148A08",
    imageUrl:
      "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
  },
  {
    title: "Punjabi",
    viewId: "punjabi-page",
    pageId: "search",
    color: "#af2896",
    imageUrl: "https://t.scdn.co/images/fc525ffce9f74e0792b9438ae541a5b1.jpeg",
  },
  {
    title: "Tamil",
    viewId: "tamil-page",
    pageId: "search",
    color: "#ffc864",
    imageUrl: "https://t.scdn.co/images/2009b6515219438382ad57192173de13.jpeg",
  },
  {
    title: "Telugu",
    viewId: "telugu-page",
    pageId: "search",
    color: "#19e68c",
    imageUrl: "https://t.scdn.co/images/a33f9b9872a84bba9a4e058d4f863915.jpeg",
  },
  {
    title: "Indie",
    viewId: "indie_alt-page",
    pageId: "search",
    color: "#608108",
    imageUrl:
      "https://i.scdn.co/image/ab67706f000000025f7327d3fdc71af27917adba",
  },
];
