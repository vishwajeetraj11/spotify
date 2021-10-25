import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconFont } from "../components/IconFont";
import { width } from "../constants/Layout";
import { fontFamily, iconUnicodes, theme } from "../shared/constants";
import { LibraryStackParamList, LibraryStackScreenProps } from "../types";

const Playlist = ({
  navigation,
  route,
}: LibraryStackScreenProps<"Library">) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Library")}
            style={{ marginBottom: 16 }}
          >
            <IconFont
              name={iconUnicodes.ARROW_LEFT_REGULAR}
              color={theme.white}
              size={20}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: `${theme.darkGray}89`,
                borderRadius: 3,
                paddingLeft: 10,
              }}
            >
              <IconFont
                color={theme.white}
                name={iconUnicodes.SEARCH_SMALL_CIRCLE_THIN}
              />
              <TextInput
                placeholder="Find in playlist"
                placeholderTextColor={theme.white}
                style={{
                  flex: 1,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 3,
                  fontFamily: fontFamily.Medium,
                  color: theme.white,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                backgroundColor: `${theme.darkGray}89`,
                borderRadius: 3,
                marginLeft: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  color: theme.white,
                }}
              >
                Filters
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 26,
            }}
          >
            <Image
              style={{ height: 200, width: 200, resizeMode: "cover" }}
              source={{ uri: playlistHeader.images[0].url }}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: fontFamily.Bold,
                color: theme.white,
                fontSize: 24,
                marginBottom: 10,
              }}
            >
              {playlistHeader.name}
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.Medium,
                color: theme.gray,
                fontSize: 12,
              }}
            >
              {playlistHeader.description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: "#EF66A0",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  color: theme.white,
                  fontSize: 12,
                }}
              >
                {playlistHeader.owner.displayName[0]}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: fontFamily.Medium,
                color: theme.white,
                fontSize: 12,
                marginLeft: 8,
              }}
            >
              {playlistHeader.owner.displayName}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: fontFamily.Book,
                color: theme.gray,
                fontSize: 14,
              }}
            >
              72,518 likes, 1h 33min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                marginTop: 20,
                width: width * 0.3,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <IconFont
                name={iconUnicodes.HEART_FILL}
                color={theme.brand}
                size={24}
              />
              <IconFont
                name={iconUnicodes.DOWNLOAD_OUTLINE_REGULAR}
                color={theme.gray}
                size={24}
              />
              <IconFont
                name={iconUnicodes.VERTICAL_SMALL_DOTS}
                color={theme.gray}
                size={24}
              />
            </View>
            <View style={{ position: "relative" }}>
              <IconFont
                name={iconUnicodes.PLAY_FILL_CIRCLE}
                color={theme.brand}
                size={60}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: theme.darkGray,
                  height: 23,
                  width: 23,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 40,
                }}
              >
                <IconFont
                  name={iconUnicodes.SHUFFLE_REGULAR}
                  color={theme.brand}
                  size={12}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {React.Children.toArray(
            playlistItems.map((item) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.imgUrl }}
                    style={{ width: 60, height: 60, resizeMode: "cover" }}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.Book,
                      color: theme.white,
                      fontSize: 17,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 8,
                      marginTop: 3,
                    }}
                  >
                    <View
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        backgroundColor: theme.gray,
                        marginRight: 9,
                        borderRadius: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: fontFamily.Bold,
                          color: theme.darkestGray,
                          fontSize: 10,
                          textTransform: "uppercase",
                          backgroundColor: theme.gray,
                        }}
                      >
                        Lyrics
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontFamily: fontFamily.Book,
                        color: theme.gray,
                        fontSize: 13,
                      }}
                    >
                      {item.artists[0].name}
                    </Text>
                  </View>
                </View>
                <View style={{ marginLeft: "auto" }}>
                  <IconFont
                    name={iconUnicodes.VERTICAL_REGULAR_DOTS}
                    color={theme.gray}
                  />
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Playlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.darkestGray,
  },
});

const playlistHeader = {
  type: "playlist",
  uri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
  name: "Folk Revival",
  description: "submit your music to > ig: illiyanah21",
  totalLength: 26,
  totalLikes: 72518,
  duration: {
    milliseconds: 5593175,
    isEstimate: false,
  },
  images: [
    {
      url: "https://i.scdn.co/image/ab67706c0000bebb37e5349e0ccc6ea97e30107f",
    },
  ],
  owner: {
    type: "user",
    uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
    username: "0q5nqoypqfiu0m6bow0rohgu1",
    displayName: "Malikah",
    images: [],
  },
  madeFor: null,
  isOwnedBySelf: false,
  isCollaborative: false,
  isPublished: false,
  hasEpisodes: false,
  canAdd: false,
  canRemove: false,
  canPlay: true,
  formatListData: null,
  canReportAnnotationAbuse: false,
  hasDateAdded: true,
  permissions: null,
};

const playlistItems = [
  {
    index: 0,
    playIndex: 0,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:3BPibZpEagpo2S0OxpMfmh",
    id: "0",
    isPlayable: true,
    duration_ms: 204333,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Your Body",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:5Bcrb5qQMVTEbJ43fdIS4A",
        name: "Mipso",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:71wj7iB4JXxUUTPosOpXMM",
      name: "Mipso",
      artist: {
        type: "artist",
        uri: "spotify:artist:5Bcrb5qQMVTEbJ43fdIS4A",
        name: "Mipso",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273a8264f29f255ef19a8a746f3",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a8264f29f255ef19a8a746f3",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851a8264f29f255ef19a8a746f3",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-11-12T00:46:51.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851a8264f29f255ef19a8a746f3",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 1,
    playIndex: 1,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:0NkiEX9bdIm7a06pJBbOYs",
    id: "1",
    isPlayable: true,
    duration_ms: 269663,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "I Don't Mind",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:3vDpQbGnzRbRVirXlfQagB",
        name: "Sturgill Simpson",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:1S6sk9yusYQoadSAbx3ZB8",
      name: "Cuttin' Grass - Vol. 1 (Butcher Shoppe Sessions)",
      artist: {
        type: "artist",
        uri: "spotify:artist:3vDpQbGnzRbRVirXlfQagB",
        name: "Sturgill Simpson",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273d26b2f801751732d0ff2e168",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02d26b2f801751732d0ff2e168",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851d26b2f801751732d0ff2e168",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-11-12T00:46:51.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851d26b2f801751732d0ff2e168",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 2,
    playIndex: 2,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:5JRRb1NUYqaZOUU3an5Sf3",
    id: "2",
    isPlayable: true,
    duration_ms: 187388,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Allergic",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:5CoKurKnxwNs3ulWmc2Eul",
        name: "Luke Banter",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:2AaGxJKhsVyrFeRfPNayJ1",
      name: "Allergic",
      artist: {
        type: "artist",
        uri: "spotify:artist:5CoKurKnxwNs3ulWmc2Eul",
        name: "Luke Banter",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273d6f737d2c4a9efac98f130f4",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02d6f737d2c4a9efac98f130f4",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851d6f737d2c4a9efac98f130f4",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-14T00:30:00.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851d6f737d2c4a9efac98f130f4",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 4,
    playIndex: 4,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:2OX5cec5sbZDSQOa7klacx",
    id: "4",
    isPlayable: true,
    duration_ms: 186143,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Seeing Other People",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:4SOtk3HtPYKqxnVuxNBMti",
        name: "Donovan Woods",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:51tp0W2tRU0IfrNpemM9ra",
      name: "Without People",
      artist: {
        type: "artist",
        uri: "spotify:artist:4SOtk3HtPYKqxnVuxNBMti",
        name: "Donovan Woods",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273ae439d32b9c590b91db32c09",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ae439d32b9c590b91db32c09",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851ae439d32b9c590b91db32c09",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-11-12T00:46:51.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851ae439d32b9c590b91db32c09",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 5,
    playIndex: 5,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:7ai2SCMNgZQOSdxh5Oq9Ke",
    id: "5",
    isPlayable: true,
    duration_ms: 179083,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Paper Mache World",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:76oY04bOzECod3aGVTDtzu",
        name: "Matilda Mann",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:4t4kHyQ0DvmfYYHJITb9l8",
      name: "Because I Wanted You to Know",
      artist: {
        type: "artist",
        uri: "spotify:artist:76oY04bOzECod3aGVTDtzu",
        name: "Matilda Mann",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27391bcbe26e804cc00f7bce26b",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0291bcbe26e804cc00f7bce26b",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485191bcbe26e804cc00f7bce26b",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-11-22T03:55:56.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d0000485191bcbe26e804cc00f7bce26b",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 6,
    playIndex: 6,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:6LHeyArdyep2T0hOvhjNM1",
    id: "6",
    isPlayable: true,
    duration_ms: 184228,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Bluebird",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:4w1ZBtHF0HxrGqQdB7i1it",
        name: "Jamestown Revival",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:55TYAmboq3yiEa8XtdfECF",
      name: "Bluebird",
      artist: {
        type: "artist",
        uri: "spotify:artist:4w1ZBtHF0HxrGqQdB7i1it",
        name: "Jamestown Revival",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2732b977d6333357cd4ac219ff4",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e022b977d6333357cd4ac219ff4",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048512b977d6333357cd4ac219ff4",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-11-27T15:42:56.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048512b977d6333357cd4ac219ff4",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 7,
    playIndex: 7,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:4MEhUxj35YRT7mqMaJgcWB",
    id: "7",
    isPlayable: true,
    duration_ms: 281180,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Fall, Fall, Fall",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:0wyMPXGfOuQzNR54ujR9Ix",
        name: "Caamp",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:0EfqcyLHP03RJpNRyA1MFY",
      name: "Fall, Fall, Fall",
      artist: {
        type: "artist",
        uri: "spotify:artist:0wyMPXGfOuQzNR54ujR9Ix",
        name: "Caamp",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273cdcb802ffba081c9ff579c6e",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02cdcb802ffba081c9ff579c6e",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851cdcb802ffba081c9ff579c6e",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:36:53.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851cdcb802ffba081c9ff579c6e",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 8,
    playIndex: 8,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:0phJpVSk8DiCtbwCunGrqC",
    id: "8",
    isPlayable: true,
    duration_ms: 206903,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Pink Shades",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:59sBwR0jPSTrbMtuTkRPN5",
        name: "Wild Rivers",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:2nH8B8VWPQ6cW95QX4xbmq",
      name: "Pink Shades",
      artist: {
        type: "artist",
        uri: "spotify:artist:59sBwR0jPSTrbMtuTkRPN5",
        name: "Wild Rivers",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273b2491244a8fab668f0a7f0ee",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02b2491244a8fab668f0a7f0ee",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851b2491244a8fab668f0a7f0ee",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:36:55.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851b2491244a8fab668f0a7f0ee",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 9,
    playIndex: 9,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:46quRQAj7MxBJ38B5EyJOc",
    id: "9",
    isPlayable: true,
    duration_ms: 214150,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Making Do",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:3nuc29fYGlQbIrwh4yrNWd",
        name: "Lake Street Dive",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:3sI7Qkzzjs4lSleiRvfJlC",
      name: "Making Do",
      artist: {
        type: "artist",
        uri: "spotify:artist:3nuc29fYGlQbIrwh4yrNWd",
        name: "Lake Street Dive",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273927a28f8627f8a650639e294",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02927a28f8627f8a650639e294",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851927a28f8627f8a650639e294",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:36:56.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851927a28f8627f8a650639e294",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 10,
    playIndex: 10,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:64ZDEx9so4Yv7335El1Ubh",
    id: "10",
    isPlayable: true,
    duration_ms: 185684,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "These Days",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:4cV1C2RzOhJIR3obecJdlq",
        name: "Kehr",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:5NaRS6oFDU0uUjzoatJWDE",
      name: "These Days",
      artist: {
        type: "artist",
        uri: "spotify:artist:4cV1C2RzOhJIR3obecJdlq",
        name: "Kehr",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2738cae28f38a623d1438f65c52",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e028cae28f38a623d1438f65c52",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048518cae28f38a623d1438f65c52",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2021-01-09T06:04:29.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048518cae28f38a623d1438f65c52",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 11,
    playIndex: 11,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:5E1Nb7y2gua7xegqo92nkj",
    id: "11",
    isPlayable: true,
    duration_ms: 169173,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Little Do They Know",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:4VfOK9rGW593mfkaJKM6Wi",
        name: "Sidney Bird",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:52sgZxxhGEHHMAirXehypN",
      name: "Little Do They Know",
      artist: {
        type: "artist",
        uri: "spotify:artist:4VfOK9rGW593mfkaJKM6Wi",
        name: "Sidney Bird",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2736a96d10bd5cff007d70072b3",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e026a96d10bd5cff007d70072b3",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048516a96d10bd5cff007d70072b3",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: true,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-24T06:10:06.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048516a96d10bd5cff007d70072b3",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 12,
    playIndex: 12,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:0sTZLPm29Nk6yJUtiX1p9d",
    id: "12",
    isPlayable: true,
    duration_ms: 185061,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "My Brother, My Keeper",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:2WqEbbet6L2ndAbvhRVb2S",
        name: "Watchhouse",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:2oQMEYaF7mjW4prPPczujU",
      name: "My Brother, My Keeper",
      artist: {
        type: "artist",
        uri: "spotify:artist:2WqEbbet6L2ndAbvhRVb2S",
        name: "Watchhouse",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2736dfa121c9c5e97cacf257a6c",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e026dfa121c9c5e97cacf257a6c",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048516dfa121c9c5e97cacf257a6c",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:36:57.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048516dfa121c9c5e97cacf257a6c",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 13,
    playIndex: 13,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:0f388trqcZyqGbPJUqGWpx",
    id: "13",
    isPlayable: true,
    duration_ms: 163893,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Keep 'Em on They Toes",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:26C2AjqgMr5aDzj6Yp2ORz",
        name: "Brent Cobb",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:0NrDp8wKKFdhyHSMlcHBnD",
      name: "Keep 'Em on They Toes",
      artist: {
        type: "artist",
        uri: "spotify:artist:26C2AjqgMr5aDzj6Yp2ORz",
        name: "Brent Cobb",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273352e9189fcc01005eec4cda5",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02352e9189fcc01005eec4cda5",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851352e9189fcc01005eec4cda5",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:03.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851352e9189fcc01005eec4cda5",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 14,
    playIndex: 14,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:2yeBOA8Mq182k99HQC1plO",
    id: "14",
    isPlayable: true,
    duration_ms: 211913,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Some Paradise",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:7EGwUS3c5dXduO4sMyLWC5",
        name: "Houndmouth",
      },
      {
        type: "artist",
        uri: "spotify:artist:3zM0frH8HgM7cK5OXpHu4E",
        name: "The Song Confessional",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:1LHKyfR3QBZbIN8GrSMBCg",
      name: "Some Paradise",
      artist: {
        type: "artist",
        uri: "spotify:artist:7EGwUS3c5dXduO4sMyLWC5",
        name: "Houndmouth",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273a70b0da96554649ae956aa0d",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a70b0da96554649ae956aa0d",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851a70b0da96554649ae956aa0d",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:07.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851a70b0da96554649ae956aa0d",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 15,
    playIndex: 15,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:4pqcb6b9PoBnK3HSt4tIeo",
    id: "15",
    isPlayable: true,
    duration_ms: 332853,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Didn't Fix Me",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:0CDUUM6KNRvgBFYIbWxJwV",
        name: "Dawes",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:3esEgXmUs1zjBVqijbZ6RQ",
      name: "Good Luck With Whatever",
      artist: {
        type: "artist",
        uri: "spotify:artist:0CDUUM6KNRvgBFYIbWxJwV",
        name: "Dawes",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273d5a8e638057cc0eebc7721c9",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02d5a8e638057cc0eebc7721c9",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851d5a8e638057cc0eebc7721c9",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:12.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851d5a8e638057cc0eebc7721c9",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 16,
    playIndex: 16,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:3DRF1vStcnkcf4tcgyf2OB",
    id: "16",
    isPlayable: true,
    duration_ms: 210895,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Take Some Time",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:1Tp7C6LzxZe9Mix6rn4zbI",
        name: "Wilderado",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:2zH89zKWGrkkzRy5l8SyYM",
      name: "Take Some Time",
      artist: {
        type: "artist",
        uri: "spotify:artist:1Tp7C6LzxZe9Mix6rn4zbI",
        name: "Wilderado",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2732bafbdac40c1e51b01eee8dd",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e022bafbdac40c1e51b01eee8dd",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048512bafbdac40c1e51b01eee8dd",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:19.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048512bafbdac40c1e51b01eee8dd",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 17,
    playIndex: 17,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:50LDbVelgU3IBkdMV3PnyY",
    id: "17",
    isPlayable: true,
    duration_ms: 230447,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Look The Other Way",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:1c5w8KrxGwq44fxM5lGB4s",
        name: "Katie Pruitt",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:5pA8ZMUIVbKuyUfL5LqvtR",
      name: "Look The Other Way",
      artist: {
        type: "artist",
        uri: "spotify:artist:1c5w8KrxGwq44fxM5lGB4s",
        name: "Katie Pruitt",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27302bef020726598d828e9a54d",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0202bef020726598d828e9a54d",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485102bef020726598d828e9a54d",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:19.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d0000485102bef020726598d828e9a54d",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 18,
    playIndex: 18,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:29iUxBEvjcdwDW8xxH0qB3",
    id: "18",
    isPlayable: true,
    duration_ms: 255467,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Heartache After Heartache",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:21BSy0UVoDXEiRdA9v9uUH",
        name: "Thomas Csorba",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:4YDSW8TCkvKByl7sOKtyH4",
      name: "Thomas Csorba",
      artist: {
        type: "artist",
        uri: "spotify:artist:21BSy0UVoDXEiRdA9v9uUH",
        name: "Thomas Csorba",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2730c13fb393ff113d5220fbf28",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e020c13fb393ff113d5220fbf28",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048510c13fb393ff113d5220fbf28",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:20.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048510c13fb393ff113d5220fbf28",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 19,
    playIndex: 19,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:1H669K2zLp8ombaLNTCi96",
    id: "19",
    isPlayable: true,
    duration_ms: 213525,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Requiem",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:72XY3HrDdFfZXNZFCT9Zh1",
        name: "Blitzen Trapper",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:10D5ke3EYdoFD89zQZjjVc",
      name: "Holy Smokes Future Jokes",
      artist: {
        type: "artist",
        uri: "spotify:artist:72XY3HrDdFfZXNZFCT9Zh1",
        name: "Blitzen Trapper",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273c2ad7f62c03b9ab7909815fe",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02c2ad7f62c03b9ab7909815fe",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851c2ad7f62c03b9ab7909815fe",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:21.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851c2ad7f62c03b9ab7909815fe",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 20,
    playIndex: 20,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:4sYhsIGQV2DRzYuTIBSoFN",
    id: "20",
    isPlayable: true,
    duration_ms: 272786,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Space And Time",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:7hzn6FoCsEaUNPnPn7TJWd",
        name: "S.G. Goodman",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:157xeDtGxPmnZIQfdJjQFT",
      name: "Old Time Feeling",
      artist: {
        type: "artist",
        uri: "spotify:artist:7hzn6FoCsEaUNPnPn7TJWd",
        name: "S.G. Goodman",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273e7cfedbe824a145e6d2043f7",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02e7cfedbe824a145e6d2043f7",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851e7cfedbe824a145e6d2043f7",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:22.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851e7cfedbe824a145e6d2043f7",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 21,
    playIndex: 21,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:41HRrlsZsR2DRt2mozte6o",
    id: "21",
    isPlayable: true,
    duration_ms: 211540,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "I Will Always Love You",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:6Qm9stX6XO1a4c7BXQDDgc",
        name: "Fruit Bats",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:4PnvVXppnTMTRS21VJpTCm",
      name: "The Glory of Fruit Bats",
      artist: {
        type: "artist",
        uri: "spotify:artist:6Qm9stX6XO1a4c7BXQDDgc",
        name: "Fruit Bats",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273a3b3d4eccdee5316170791f6",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a3b3d4eccdee5316170791f6",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851a3b3d4eccdee5316170791f6",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:24.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851a3b3d4eccdee5316170791f6",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 22,
    playIndex: 22,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:5I9K1oVuO22OehDQZnxdr2",
    id: "22",
    isPlayable: true,
    duration_ms: 223880,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Five More Minutes",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:6HhV0jtMMK5HYnYgG0xgtz",
        name: "The War and Treaty",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:7JpS1MkDWu1bRS4b9VWeoY",
      name: "Hearts Town",
      artist: {
        type: "artist",
        uri: "spotify:artist:6HhV0jtMMK5HYnYgG0xgtz",
        name: "The War and Treaty",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734172a0bd1ac6ac5d8f3eab29",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024172a0bd1ac6ac5d8f3eab29",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514172a0bd1ac6ac5d8f3eab29",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:25.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048514172a0bd1ac6ac5d8f3eab29",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 23,
    playIndex: 23,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:2FX88wSbz72eeCm9EGIZqN",
    id: "23",
    isPlayable: true,
    duration_ms: 228853,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Old Flowers",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:1EI0B66miJj5Fl408B7E9H",
        name: "Courtney Marie Andrews",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:7cHhJQTf6HhcuSrmD7MNkK",
      name: "Old Flowers",
      artist: {
        type: "artist",
        uri: "spotify:artist:1EI0B66miJj5Fl408B7E9H",
        name: "Courtney Marie Andrews",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273797588dbb78580234e72a486",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02797588dbb78580234e72a486",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851797588dbb78580234e72a486",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-04T03:37:26.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851797588dbb78580234e72a486",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 24,
    playIndex: 24,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:0ut7f4KB9sZQ8uhA4HyOMt",
    id: "24",
    isPlayable: true,
    duration_ms: 144186,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "Half Your Love",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:4C50EbCS11M0VbGyH3OfLt",
        name: "Bahamas",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:0vWNWn7PcEotOycEtBC7br",
      name: "Sad Hunk",
      artist: {
        type: "artist",
        uri: "spotify:artist:4C50EbCS11M0VbGyH3OfLt",
        name: "Bahamas",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273a69797b0f6c6f4f81f49ec84",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a69797b0f6c6f4f81f49ec84",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851a69797b0f6c6f4f81f49ec84",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2021-01-02T18:00:51.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d00004851a69797b0f6c6f4f81f49ec84",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
  {
    index: 25,
    playIndex: 25,
    contextUri: "spotify:playlist:4XhG3nJHvKjLDCB106iBa7",
    uri: "spotify:track:3gcZsNuGubRdLw3xKHMyvg",
    id: "25",
    isPlayable: true,
    duration_ms: 195668,
    isPaywalled: false,
    isUserSubscribed: false,
    name: "All of the Boys - Country Mix",
    artists: [
      {
        type: "artist",
        uri: "spotify:artist:3xl6isKUFqJNui79kpdT0Y",
        name: "Caroline Jones",
      },
    ],
    albumOrShow: {
      type: "album",
      uri: "spotify:album:50WDgyxjHy4Aw99MuH4vjP",
      name: "What A View",
      artist: {
        type: "artist",
        uri: "spotify:artist:3xl6isKUFqJNui79kpdT0Y",
        name: "Caroline Jones",
      },
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2735842fcefcf1a034571f9fd3f",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e025842fcefcf1a034571f9fd3f",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048515842fcefcf1a034571f9fd3f",
          width: 64,
          height: 64,
        },
      ],
    },
    isExplicit: false,
    isCollaborative: false,
    nrCollaborators: 1,
    isMixedMedia: false,
    isLocal: false,
    addedBy: {
      type: "user",
      uri: "spotify:user:0q5nqoypqfiu0m6bow0rohgu1",
      username: "0q5nqoypqfiu0m6bow0rohgu1",
      displayName: null,
      images: [],
    },
    hasDecoratedAddedBy: false,
    dateAdded: "2020-12-16T21:01:35.000Z",
    release_date: "",
    isMOGEFRestricted: false,
    type: "track",
    imgUrl: "https://i.scdn.co/image/ab67616d000048515842fcefcf1a034571f9fd3f",
    allowedDropTypes: [],
    isDisliked: false,
    playlistName: "Folk Revival",
    isLive: false,
  },
];
