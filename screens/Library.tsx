import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { IconFont } from "../components/IconFont";
import LibraryHorizontalCard from "../components/screens/Library/LibraryHorizontalCard";
import { Plus, Recent, Search } from "../components/Svgs";
import {
  fontFamily,
  iconNames,
  iconUnicodes,
  theme,
} from "../shared/constants";

const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headerLeftTitles}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>V</Text>
          </View>
          <Text style={styles.headerTitle}>Your Library</Text>
        </View>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity>
            <Search fill={theme.white} height={23} width={23} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Plus strokeColor={theme.white} height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tagContainer}>
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}>Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tag, { marginLeft: 12 }]}>
          <Text style={styles.tagText}>Artists</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ marginTop: 3 }}>
            <Recent height={16} width={16} fill={theme.white} />
          </View>
          <Text style={[styles.tagText, { marginLeft: 12 }]}>
            Recently played
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconFont name={iconUnicodes.GRID_VIEW_SQUARE_BOLD} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={libraries}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return <LibraryHorizontalCard library={item} />;
        }}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      />
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.darkestGray,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: theme.brand,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    fontFamily: fontFamily.Black,
    fontSize: 17,
  },
  headerTitle: {
    color: "#ffffff",
    fontFamily: fontFamily.Black,
    fontSize: 24,
  },
  headerRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftTitles: { flexDirection: "row", alignItems: "center" },
  tagContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  tag: {
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderColor: theme.gray,
    borderWidth: 1,
    borderRadius: 100,
  },
  tagText: {
    fontFamily: fontFamily.Light,
    fontSize: 15,
    color: theme.white,
  },
});

const libraries = [
  {
    type: "playlist",
    id: "0",
    uid: "spotify:playlist:6lIKHtP9V04sRiwuMGk29g_1",
    addedAt: "2021-10-10T03:18:15.000Z",
    uri: "spotify:playlist:6lIKHtP9V04sRiwuMGk29g",
    name: "LOFI + SLOWED + REVERBED + MASHUP",
    description:
      "its a different vibe altogether...glad you liked the playlist..thank you🥰:)",
    totalLength: 116,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da844cd73ef5e82000250eaf06dd",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:7z77xjedfp0gk0adf3mt4w6xt",
      username: "7z77xjedfp0gk0adf3mt4w6xt",
      displayName: "Alisha",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "1",
    uid: "spotify:playlist:4In2cb7owFxzilLg8QjawW_1",
    addedAt: "2021-10-09T18:47:26.000Z",
    uri: "spotify:playlist:4In2cb7owFxzilLg8QjawW",
    name: "English",
    description: "Lofi, Originals",
    totalLength: 5,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://mosaic.scdn.co/640/ab67616d00001e0229409ca87220ac083d04c6feab67616d00001e025355919e31efac9b14c45c49ab67616d00001e02897f73256b9128a9d70eaf66ab67616d00001e02f6fa4a75fccc308f26c726c6",
        width: 640,
        height: 640,
      },
      {
        url: "https://mosaic.scdn.co/300/ab67616d00001e0229409ca87220ac083d04c6feab67616d00001e025355919e31efac9b14c45c49ab67616d00001e02897f73256b9128a9d70eaf66ab67616d00001e02f6fa4a75fccc308f26c726c6",
        width: 300,
        height: 300,
      },
      {
        url: "https://mosaic.scdn.co/60/ab67616d00001e0229409ca87220ac083d04c6feab67616d00001e025355919e31efac9b14c45c49ab67616d00001e02897f73256b9128a9d70eaf66ab67616d00001e02f6fa4a75fccc308f26c726c6",
        width: 60,
        height: 60,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:s0y2iojx6uk7vwc4n1haulkbd",
      username: "s0y2iojx6uk7vwc4n1haulkbd",
      displayName: "Vishwajeet Raj",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: true,
    isCollaborative: false,
    isPublished: true,
    hasEpisodes: null,
    canAdd: true,
    canRemove: true,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "2",
    uid: "spotify:playlist:78NCk7gXrDarGP8qAQXv93_1",
    addedAt: "2021-10-09T16:09:55.000Z",
    uri: "spotify:playlist:78NCk7gXrDarGP8qAQXv93",
    name: "Hindi",
    description: "",
    totalLength: 17,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://mosaic.scdn.co/640/ab67616d00001e021b326fdf5cd8b660f3594edaab67616d00001e02a709ae7b91e758457f91277aab67616d00001e02cb330b6a9bfcb6cd216200fbab67616d00001e02f0ee7124639055fc049c24c9",
        width: 640,
        height: 640,
      },
      {
        url: "https://mosaic.scdn.co/300/ab67616d00001e021b326fdf5cd8b660f3594edaab67616d00001e02a709ae7b91e758457f91277aab67616d00001e02cb330b6a9bfcb6cd216200fbab67616d00001e02f0ee7124639055fc049c24c9",
        width: 300,
        height: 300,
      },
      {
        url: "https://mosaic.scdn.co/60/ab67616d00001e021b326fdf5cd8b660f3594edaab67616d00001e02a709ae7b91e758457f91277aab67616d00001e02cb330b6a9bfcb6cd216200fbab67616d00001e02f0ee7124639055fc049c24c9",
        width: 60,
        height: 60,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:s0y2iojx6uk7vwc4n1haulkbd",
      username: "s0y2iojx6uk7vwc4n1haulkbd",
      displayName: "Vishwajeet Raj",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: true,
    isCollaborative: false,
    isPublished: true,
    hasEpisodes: null,
    canAdd: true,
    canRemove: true,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "3",
    uid: "spotify:playlist:37i9dQZF1DWWQRwui0ExPn_1",
    addedAt: "2021-10-09T16:09:33.000Z",
    uri: "spotify:playlist:37i9dQZF1DWWQRwui0ExPn",
    name: "lofi beats",
    description: "Beats to relax, study, and focus...",
    totalLength: 610,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706f00000002b049427eae79936be1ddd29d",
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:spotify",
      username: "spotify",
      displayName: "Spotify",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "4",
    uid: "spotify:playlist:05fpjiYYYAaTAuP2vlqjAz_1",
    addedAt: "2020-11-20T06:32:35.833Z",
    uri: "spotify:playlist:05fpjiYYYAaTAuP2vlqjAz",
    name: "Reggae Dancehall Hits 2020",
    description: "",
    totalLength: 23,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84e5fa1fae3674182665e9d207",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:xej9p3z7fcupd053jsh7ik0ph",
      username: "xej9p3z7fcupd053jsh7ik0ph",
      displayName: "dejah",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "5",
    uid: "spotify:playlist:3IweNvbETQzaPfcnmQOYJo_1",
    addedAt: "2020-11-20T06:32:01.238Z",
    uri: "spotify:playlist:3IweNvbETQzaPfcnmQOYJo",
    name: "AriBeyDuaLipa PopHits 2021",
    description: "pop secret hits, djpopj2021@gmail.com",
    totalLength: 33,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84e2a257c154bf4b24d5191dbf",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:78meimfud2vt1lv8t0rdlzacv",
      username: "78meimfud2vt1lv8t0rdlzacv",
      displayName: "janelle",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "6",
    uid: "spotify:playlist:4dbL3QIhqMtXJvyb9rlpzd_1",
    addedAt: "2020-11-20T06:31:28.676Z",
    uri: "spotify:playlist:4dbL3QIhqMtXJvyb9rlpzd",
    name: "Hip Hop Trap Music",
    description: "trap hip hop hits ~ djluckycarl@yahoo.com",
    totalLength: 38,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da848ead3b4af8fd78691f135da5",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:zda2k4fvqqm5qjkzneyk5go4j",
      username: "zda2k4fvqqm5qjkzneyk5go4j",
      displayName: "loren",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "7",
    uid: "spotify:playlist:4RvXH10QkUkPNYzf7ubFIO_1",
    addedAt: "2020-11-20T06:30:55.208Z",
    uri: "spotify:playlist:4RvXH10QkUkPNYzf7ubFIO",
    name: "R&B Cool Hits 2021",
    description: "rnb hits ~ djronniegroove@yahoo.com",
    totalLength: 30,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84b04d1862a64736e56a0e760e",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:bcz1bb6961enh4qjka9occnze",
      username: "bcz1bb6961enh4qjka9occnze",
      displayName: "amelia henry",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "8",
    uid: "spotify:playlist:7zMcjI0Zofh6Mo4prKHKj3_1",
    addedAt: "2020-11-20T06:30:25.451Z",
    uri: "spotify:playlist:7zMcjI0Zofh6Mo4prKHKj3",
    name: "Rap Street Olympics",
    description: "rap street classics, djterryraps@gmail.com",
    totalLength: 39,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da8415d9c81f8dec812e2f1c5991",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:qg9ztiec8005afccxy3r3w7if",
      username: "qg9ztiec8005afccxy3r3w7if",
      displayName: "meghan",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "9",
    uid: "spotify:playlist:422CKdcbmL1Y7spv1Flusa_1",
    addedAt: "2020-11-20T06:29:49.698Z",
    uri: "spotify:playlist:422CKdcbmL1Y7spv1Flusa",
    name: "R&B Smooth Vibes",
    description: "smooth hits ~ djsnakepaul@yahoo.com",
    totalLength: 31,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84698b8ea6d064e3f5d7aa28d9",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:vpto0r9q6cn4vg5lrq8h31uvu",
      username: "vpto0r9q6cn4vg5lrq8h31uvu",
      displayName: "paul",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "10",
    uid: "spotify:playlist:4oQ5rVfG6yP8nKrxlvITdV_1",
    addedAt: "2020-11-20T06:28:47.740Z",
    uri: "spotify:playlist:4oQ5rVfG6yP8nKrxlvITdV",
    name: "Jazz Blues Soul Funk 2021",
    description:
      "soothing relaxing music have some wine and feel your soul. ~ djsamclue@yahoo.com",
    totalLength: 28,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84ef5e44d8dcef98d4d75562fc",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:787p3leavr9jeqlbl5tfeu2ol",
      username: "787p3leavr9jeqlbl5tfeu2ol",
      displayName: "tamia",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "11",
    uid: "spotify:playlist:2N7849C40IRaWepumAnfpo_1",
    addedAt: "2020-11-20T06:28:15.659Z",
    uri: "spotify:playlist:2N7849C40IRaWepumAnfpo",
    name: "Beats Blunts & Instrumental Bangers",
    description:
      "head knocking beats , more beat or instrumtal bangers: djdeionbrickcity@yahoo.com",
    totalLength: 30,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da846c47b5271623610ae6d80ae0",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:heyh88ls39cz4ev0yh2d14ag6",
      username: "heyh88ls39cz4ev0yh2d14ag6",
      displayName: "hakeya",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "13",
    uid: "spotify:playlist:42y15Bp7rdj1ktA1JXtodH_1",
    addedAt: "2020-11-20T06:27:13.710Z",
    uri: "spotify:playlist:42y15Bp7rdj1ktA1JXtodH",
    name: "Chil Relax Music Vibez",
    description: "music vibes , djnikkimood@yahoo.com",
    totalLength: 26,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84c1f2ee4f41ddc1f204461c0d",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:p2m6fc5edvtc4wdv3cvafp768",
      username: "p2m6fc5edvtc4wdv3cvafp768",
      displayName: "Nisha",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "14",
    uid: "spotify:playlist:26EONV3iVuNeM3WFSYSW2C_1",
    addedAt: "2020-11-20T06:26:17.615Z",
    uri: "spotify:playlist:26EONV3iVuNeM3WFSYSW2C",
    name: "G's Rap Music",
    description: "rap hits, djgraphealth@gmail.com",
    totalLength: 34,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da8425f2b11e027cd007fc4fbfed",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:ehn2l0pncr1gj0y3vso5z33q3",
      username: "ehn2l0pncr1gj0y3vso5z33q3",
      displayName: "heather",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "15",
    uid: "spotify:playlist:3pn6zKv2tWf7ZYHvlHdxG7_1",
    addedAt: "2020-11-20T06:25:42.510Z",
    uri: "spotify:playlist:3pn6zKv2tWf7ZYHvlHdxG7",
    name: "Pop Goes the 2020's",
    description: "submit your music to &gt; ig: illiyanah21",
    totalLength: 25,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da847c6478caa6663d558eddfbbd",
        width: 640,
        height: 640,
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
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "16",
    uid: "spotify:playlist:04zTc4qVjjzKwxJKfnKmdt_1",
    addedAt: "2020-11-20T06:25:15.898Z",
    uri: "spotify:playlist:04zTc4qVjjzKwxJKfnKmdt",
    name: "Pop Sip & Chill Music",
    description: "popsipchill hits ~ djdejachillpop@yahoo.com",
    totalLength: 33,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da8451bd41153e5fdaceb5566980",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:xej9p3z7fcupd053jsh7ik0ph",
      username: "xej9p3z7fcupd053jsh7ik0ph",
      displayName: "dejah",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
  {
    type: "playlist",
    id: "17",
    uid: "spotify:playlist:0TZdb4jQjfBvh9KSveV0k4_1",
    addedAt: "2020-11-20T06:24:40.859Z",
    uri: "spotify:playlist:0TZdb4jQjfBvh9KSveV0k4",
    name: "Rock It On Out 2021",
    description: "rock hits, Send your music to : djcoreyrock@gmail.com",
    totalLength: 0,
    totalLikes: null,
    duration: null,
    images: [
      {
        url: "https://i.scdn.co/image/ab67706c0000da84065d7978fdba9159daa434e7",
        width: 640,
        height: 640,
      },
    ],
    owner: {
      type: "user",
      uri: "spotify:user:pcrl2ssfqnnigika236x7rotc",
      username: "pcrl2ssfqnnigika236x7rotc",
      displayName: "Corey",
      images: [],
    },
    madeFor: null,
    isOwnedBySelf: false,
    isCollaborative: false,
    isPublished: false,
    hasEpisodes: null,
    canAdd: false,
    canRemove: false,
    canPlay: null,
    formatListData: null,
    canReportAnnotationAbuse: false,
    hasDateAdded: true,
    permissions: null,
  },
];
