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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, iconNames, theme } from "../shared/constants";
import { RootTabScreenProps } from "../types";

import { Icon } from "../components/Icon";
import { HomeHeader } from "../components/screens/Home/HomeHeader";
import SongCard from "../components/screens/Home/SongCard";

export const Home = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <HomeHeader />
        <Text style={styles.greeting}>Episodes for you</Text>
        <FlatList
          data={episodes}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={({ item }) => {
            return <SongCard item={item} />;
          }}
        />
        <View style={{ marginTop: 16 }}>
          <Text style={styles.greeting}>Your top mixes</Text>
          <FlatList
            data={topMixes}
            keyExtractor={({ id }) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            renderItem={({ item }) => {
              return <SongCard item={item} />;
            }}
          />
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
  title: {
    fontFamily: fontFamily.Book,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  greeting: {
    color: theme.white,
    fontFamily: fontFamily.Black,
    fontSize: 22,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

const episodes = [
  {
    audio_preview_url:
      "https://p.scdn.co/mp3-preview/a9cb29a2edf060a653e83e299e12fd59af4eb8a9",
    content_type: "PODCAST_EPISODE",
    description:
      "Even if it's not, that's still fine.  Learn more about your ad choices. Visit podcastchoices.com/adchoices",
    duration_ms: 924734,
    explicit: false,
    external_urls: {
      spotify: "https://open.spotify.com/episode/5V3mWEE5hdl4pt1DQxfI2d",
    },
    href: "https://api.spotify.com/v1/episodes/5V3mWEE5hdl4pt1DQxfI2d",
    html_description:
      "<p>Even if it's not, that's still fine. </p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://podcastchoices.com/adchoices\">podcastchoices.com/adchoices</a></p>",
    id: "5V3mWEE5hdl4pt1DQxfI2d",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6765630000ba8a95e4bd494ad3206b60b38a9c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67656300005f1f95e4bd494ad3206b60b38a9c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab6765630000f68d95e4bd494ad3206b60b38a9c",
        width: 64,
      },
    ],
    is_externally_hosted: false,
    is_paywall_content: false,
    is_playable: true,
    language: "ta",
    languages: ["ta"],
    name: "Old is Gold! ",
    release_date: "2021-10-18",
    release_date_precision: "day",
    resume_point: {
      fully_played: false,
      resume_position_ms: 0,
    },
    type: "episode",
    uri: "spotify:episode:5V3mWEE5hdl4pt1DQxfI2d",
  },
  {
    audio_preview_url:
      "https://p.scdn.co/mp3-preview/9450a3a487641a91f442f516a7e22e75c605e696",
    content_type: "PODCAST_EPISODE",
    description:
      "Dave Jones is once again joined by Gary Neville and Jamie Carragher in the MNF studio to discuss all the talking points from the latest Premier League weekend including Manchester United’s defeat to Leicester in which Gary analyses in detail. Jamie gives his views on what is a realistic target for Newcastle this season despite their recent takeover. Analysis and reaction also comes from the Emirates as the former Gunners’ legend Patrick Vieira frustrates a lucky Arsenal.",
    duration_ms: 5614654,
    explicit: false,
    external_playback_url:
      "https://api.spreaker.com/download/episode/47036242/mnf_pod_21_10_18.mp3",
    external_urls: {
      spotify: "https://open.spotify.com/episode/4EGibBrE5qf5n15zgWg1SV",
    },
    href: "https://api.spotify.com/v1/episodes/4EGibBrE5qf5n15zgWg1SV",
    html_description:
      "Dave Jones is once again joined by Gary Neville and Jamie Carragher in the MNF studio to discuss all the talking points from the latest Premier League weekend including Manchester United’s defeat to Leicester in which Gary analyses in detail. Jamie gives his views on what is a realistic target for Newcastle this season despite their recent takeover. Analysis and reaction also comes from the Emirates as the former Gunners’ legend Patrick Vieira frustrates a lucky Arsenal.",
    id: "4EGibBrE5qf5n15zgWg1SV",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/dca81b8aaa576176f056384a96cc65d08feb7a59",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/adf4a49802a4d56f67d02802f294cdcbab573e3f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/f247d5dffe5534f8d5bf7490da50d0cf8e213209",
        width: 64,
      },
    ],
    is_externally_hosted: false,
    is_paywall_content: false,
    is_playable: true,
    language: "en",
    languages: ["en"],
    name: "MNF: Neville analyses Utd’s dismal display, Carra’s Newcastle verdict and Arsenal snatch a draw from Vieira’s Palace",
    release_date: "2021-10-18",
    release_date_precision: "day",
    resume_point: {
      fully_played: false,
      resume_position_ms: 0,
    },
    type: "episode",
    uri: "spotify:episode:4EGibBrE5qf5n15zgWg1SV",
  },
  {
    audio_preview_url:
      "https://p.scdn.co/mp3-preview/99824006cc7deb7522bedd955f9662cf328ac843",
    content_type: "PODCAST_EPISODE",
    description:
      "Hi there, I'm Harry from www.englishlessonviaskype.com and welcome to my English learning podcast where I help you improve your English speaking, listening, pronunciation and grammar.In this podcast episode, you'll better ways to say 'I want' in English. 'I want' sounds very harsh in English. My mother always used to say, 'I want never gets.' Learn formal and informal ways to say want in English. Learn useful English words and expressions that native English speakers use. Improve your English speaking and gain your confidence.You can also watch this lesson on my YouTube channel  https://www.youtube.com/learnenglishwithharry Learn English with Harryhttps://www.englishlessonviaskype.com/online-learning-courses/ - quality online English courses to help you improve your English speaking skills, grammar and get your English confidence. From only €7.99.Support the show (https://www.buymeacoffee.com/englishlessons)",
    duration_ms: 1419755,
    explicit: false,
    external_playback_url:
      "https://pdcn.co/e/www.buzzsprout.com/442543/9356387-speak-better-english-with-harry-episode-330.mp3",
    external_urls: {
      spotify: "https://open.spotify.com/episode/2DDJmDCjRgT3AbFm6UZAIV",
    },
    href: "https://api.spotify.com/v1/episodes/2DDJmDCjRgT3AbFm6UZAIV",
    html_description:
      "<p>Hi there, I&apos;m Harry from <a href='https://www.englishlessonviaskype.com/easy-peasy-english-club/'>www.englishlessonviaskype.com</a> and welcome to my English learning podcast where I help you improve your English speaking, listening, pronunciation and grammar.<br/><br/>In this podcast episode, you&apos;ll better ways to say &apos;I want&apos; in English. &apos;I want&apos; sounds very harsh in English. My mother always used to say, &apos;I want never gets.&apos; Learn formal and informal ways to say want in English. <br/><br/>Learn useful English words and expressions that native English speakers use. Improve your English speaking and gain your confidence.<br/><br/>You can also watch this lesson on my <b>YouTube channel </b> <a href='https://www.youtube.com/learnenglishwithharry'>https://www.youtube.com/learnenglishwithharry</a> Learn English with Harry<br/><br/><a href='https://www.englishlessonviaskype.com/online-learning-courses/'>https://www.englishlessonviaskype.com/online-learning-courses/</a> - quality online English courses to help you improve your English speaking skills, grammar and get your English confidence. From only €7.99.</p><p><a rel=\"payment\" href=\"https://www.buymeacoffee.com/englishlessons\">Support the show</a> (https://www.buymeacoffee.com/englishlessons)</p>",
    id: "2DDJmDCjRgT3AbFm6UZAIV",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6765630000ba8aaf4b5e5df5edec49ed217e13",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67656300005f1faf4b5e5df5edec49ed217e13",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab6765630000f68daf4b5e5df5edec49ed217e13",
        width: 64,
      },
    ],
    is_externally_hosted: false,
    is_paywall_content: false,
    is_playable: true,
    language: "en-GB",
    languages: ["en-GB"],
    name: "Speak Better English with Harry | Episode 330",
    release_date: "2021-10-13",
    release_date_precision: "day",
    resume_point: {
      fully_played: false,
      resume_position_ms: 0,
    },
    type: "episode",
    uri: "spotify:episode:2DDJmDCjRgT3AbFm6UZAIV",
  },
  {
    audio_preview_url:
      "https://p.scdn.co/mp3-preview/e93dde1022b03ef3c8e2284afc7d5cb5a52f9c9d",
    content_type: "PODCAST_EPISODE",
    description:
      "Doston iss episode mein hum Gamer OP, Techno Gmerz AKA Ujjwal Chaurasia se baat karte hain!! Kaafi games jaise Resident Evil, God of War, Days Gone, BGMI ka discussion karte hain . Ujjwal apne school days aur gaming journey ke baarein mein baat karta hai and tells me why he wants to start a gaming team!  Learn more about your ad choices. Visit podcastchoices.com/adchoices",
    duration_ms: 2276754,
    explicit: false,
    external_urls: {
      spotify: "https://open.spotify.com/episode/6TbriTjVE7vlv5mnaDhBPm",
    },
    href: "https://api.spotify.com/v1/episodes/6TbriTjVE7vlv5mnaDhBPm",
    html_description:
      '<p>Doston iss episode mein hum Gamer OP, Techno Gmerz AKA Ujjwal Chaurasia se baat karte hain!! Kaafi games jaise Resident Evil, God of War, Days Gone, BGMI ka discussion karte hain . Ujjwal apne school days aur gaming journey ke baarein mein baat karta hai and tells me why he wants to start a gaming team!</p><p><br></p><p> </p><p>Learn more about your ad choices. Visit <a href="https://podcastchoices.com/adchoices">podcastchoices.com/adchoices</a></p>',
    id: "6TbriTjVE7vlv5mnaDhBPm",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6765630000ba8a977853faaaa3319719a42fdb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67656300005f1f977853faaaa3319719a42fdb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab6765630000f68d977853faaaa3319719a42fdb",
        width: 64,
      },
    ],
    is_externally_hosted: false,
    is_paywall_content: false,
    is_playable: true,
    language: "hi",
    languages: ["hi"],
    name: "Techno Gamerz on the life of a gamer",
    release_date: "2021-10-12",
    release_date_precision: "day",
    resume_point: {
      fully_played: false,
      resume_position_ms: 0,
    },
    type: "episode",
    uri: "spotify:episode:6TbriTjVE7vlv5mnaDhBPm",
  },
  {
    audio_preview_url:
      "https://p.scdn.co/mp3-preview/8396fc8cb0adda6ae1fb17d27cd2be477c36fa63",
    content_type: "PODCAST_EPISODE",
    description:
      'EVERY MORNING YOU HAVE 2 CHOICES."Every morning you have two choices. Continue to sleep with your dreams, or wake up and chase them "You\'ve got to get up every morning with determination if you\'re going to go to bed with satisfaction."Choose the positive. You have a choice. You are the master of your attitude. Choose the positive, the constructive.""Happiness is a choice you cannot choose what happens, but you can choose your reaction to it and be happy."Social linksInstagram - @daily_motivationsorgFacebook- @daily_motivationsorgInterested in sponsoring this show reach out to us via tolexyofficail@gmail.comYou can also support this show by clicking the link below       Kindly support us here-( SUPPORT DAILY MOTIVATIONS )Get motivations team merch here- (DAILY MOTIVATIONS MERCH)Thinking of starting your own podcast?   Click here - (START A PODCAST)Support the show (https://paypal.me/dailymotivations?locale.x=en_US)',
    duration_ms: 634775,
    explicit: false,
    external_playback_url:
      "https://pdcn.co/e/www.buzzsprout.com/1831207/9340473-every-morning-you-have-2-choices.mp3",
    external_urls: {
      spotify: "https://open.spotify.com/episode/7BgHA95jW5icdXA1VAnYCN",
    },
    href: "https://api.spotify.com/v1/episodes/7BgHA95jW5icdXA1VAnYCN",
    html_description:
      '<p><b>EVERY MORNING YOU HAVE 2 CHOICES.</b><br/><b>&quot;Every morning you have two choices. Continue to sleep with your dreams, or wake up and chase them &quot;</b></p><p><b>You&apos;ve got to get up every morning with determination if you&apos;re going to go to bed with satisfaction.<br/><br/>&quot;Choose the positive. You have a choice. You are the master of your attitude. Choose the positive, the constructive.&quot;<br/><br/>&quot;Happiness is a choice you cannot choose what happens, but you can choose your reaction to it and be happy.&quot;<br/>Social links</b><br/><b>Instagram -</b> <a href=\'https://www.instagram.com/daily_motivationsorg/\'>@daily_motivationsorg</a><br/><b>Facebook-</b><a href=\'https://web.facebook.com/dailymotivationsorg/\'> @daily_motivationsorg<br/></a><br/>Interested in sponsoring this show reach out to us via <b>tolexyofficail@gmail.com<br/></b>You can also support this show by clicking the link below       </p><p>Kindly support us here-<a href="https://paypal.me/dailymotivations?locale.x=en_US">( SUPPORT DAILY MOTIVATIONS )</a><br><br>Get motivations team merch here-<a href="http://tee.pub/lic/daily_motivationsorg"> (DAILY MOTIVATIONS MERCH)</a><br><br>Thinking of starting your own podcast?&nbsp; &nbsp;<br>Click here -<a href="https://www.buzzsprout.com/?referrer_id=1811841"> (START A PODCAST)</a></p><p><a rel="payment" href="https://paypal.me/dailymotivations?locale.x=en_US">Support the show</a> (https://paypal.me/dailymotivations?locale.x=en_US)</p>',
    id: "7BgHA95jW5icdXA1VAnYCN",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6765630000ba8a2d91bdfc049e28db4d605e90",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67656300005f1f2d91bdfc049e28db4d605e90",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab6765630000f68d2d91bdfc049e28db4d605e90",
        width: 64,
      },
    ],
    is_externally_hosted: false,
    is_paywall_content: false,
    is_playable: true,
    language: "en",
    languages: ["en"],
    name: "EVERY MORNING YOU HAVE 2 CHOICES.",
    release_date: "2021-10-09",
    release_date_precision: "day",
    resume_point: {
      fully_played: false,
      resume_position_ms: 0,
    },
    type: "episode",
    uri: "spotify:episode:7BgHA95jW5icdXA1VAnYCN",
  },
];

const topMixes = [
  {
    collaborative: false,
    description: "Pranish VP, Uzumaki Baka, Mohit Chauhan and more",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EIWNV4pRO1Vri",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EIWNV4pRO1Vri",
    id: "37i9dQZF1EIWNV4pRO1Vri",
    images: [
      {
        height: null,
        url: "https://seed-mix-image.spotifycdn.com/v6/img/artist/5FC1kfyWQSWjCoBkn9XNnI/en/default",
        width: null,
      },
    ],
    name: "Aadesh Goud Mix",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: null,
    snapshot_id:
      "MTYzNTA1NSwwMDAwMDAwMGQwZWI5ODBkMjk5NTVjYTBmYTlkM2Y1NjI1YTE0OGM3",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EIWNV4pRO1Vri/tracks",
      total: 50,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EIWNV4pRO1Vri",
  },
  {
    collaborative: false,
    description: "Pranish VP, Sanjay S Yadav, Akhil Sachdeva and more",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EIVtsbiFNDybu",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EIVtsbiFNDybu",
    id: "37i9dQZF1EIVtsbiFNDybu",
    images: [
      {
        height: null,
        url: "https://seed-mix-image.spotifycdn.com/v6/img/artist/5osbiefpwljgv3pRQNmbFO/en/default",
        width: null,
      },
    ],
    name: "WORMONO Mix",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: null,
    snapshot_id:
      "MTYzNTA1NSwwMDAwMDAwMDQxMjUyZjE2YWMzMzg4NTZhM2ZlYmI3ZWIyYTEzMGI5",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EIVtsbiFNDybu/tracks",
      total: 50,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EIVtsbiFNDybu",
  },
  {
    collaborative: false,
    description: "Bebe Rexha, Zedd, Carlie Hanson and more",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EIZ8RuaHbBvxt",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EIZ8RuaHbBvxt",
    id: "37i9dQZF1EIZ8RuaHbBvxt",
    images: [
      {
        height: null,
        url: "https://seed-mix-image.spotifycdn.com/v6/img/artist/5JZ7CnR6gTvEMKX4g70Amv/en/default",
        width: null,
      },
    ],
    name: "Lauv Mix",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: null,
    snapshot_id:
      "MTYzNTA1NSwwMDAwMDAwMDAzZDZhMmNiNDhlZWZhMGE4MzZjMmRkOTVjZTM0NzYw",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EIZ8RuaHbBvxt/tracks",
      total: 50,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EIZ8RuaHbBvxt",
  },
  {
    collaborative: false,
    description: "The Chainsmokers, Vicetone,Flo Rida and more",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EQqedj0y9Uwvu",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EQqedj0y9Uwvu",
    id: "37i9dQZF1EQqedj0y9Uwvu",
    images: [
      {
        height: null,
        url: "https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/69GGBxA162lTqCwzJG5jLp/en/default",
        width: null,
      },
    ],
    name: "2010s Mix",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: null,
    snapshot_id:
      "MTYzNTA1NSwwMDAwMDAwMGFhMDZhY2UwZjA3ZjQ0OGIwN2M0MWFiYmIwNDNjMTU0",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EQqedj0y9Uwvu/tracks",
      total: 50,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EQqedj0y9Uwvu",
  },
  {
    collaborative: false,
    description: "Rihanna, Kailash Kher, Linkin Park and more",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/37i9dQZF1EQn4jwNIohw50",
    },
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1EQn4jwNIohw50",
    id: "37i9dQZF1EQn4jwNIohw50",
    images: [
      {
        height: null,
        url: "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/5pKCCKE2ajJHZ9KAiaK11H/en/default",
        width: null,
      },
    ],
    name: "2000s Mix",
    owner: {
      display_name: "Spotify",
      external_urls: {
        spotify: "https://open.spotify.com/user/spotify",
      },
      href: "https://api.spotify.com/v1/users/spotify",
      id: "spotify",
      type: "user",
      uri: "spotify:user:spotify",
    },
    primary_color: null,
    public: null,
    snapshot_id:
      "MTYzNTA1NSwwMDAwMDAwMGI1M2VhZTIzNjZhN2ZlMWQ3MGI2MzdlNmQ1ZGI5ZTky",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/37i9dQZF1EQn4jwNIohw50/tracks",
      total: 50,
    },
    type: "playlist",
    uri: "spotify:playlist:37i9dQZF1EQn4jwNIohw50",
  },
];
