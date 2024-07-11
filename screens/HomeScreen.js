import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SpotifyAuthButton from "../components/SpotifyAuthButton.js";
import SongList from "../components/SongList";

export default function HomeScreen({ navigation, route }) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // tracks: array of all songs
  // token: will have random string if authenticated
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks} navigation={navigation} />;
  } else {
    contentDisplayed = (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"white"}}>Hello Spotify user!</Text>
      {contentDisplayed}
      <StatusBar style="auto" />
      <Text style={{color:"white", fontSize:25, padding:10}}>Note: I do not use Spotify 😅</Text>
      <Text style={{color:"white", fontSize:25, padding:10}}>How about you try using YouTube Music instead? :D</Text>
      {/* <Button
        title="Go to Generic Song Screen"
        onPress={() => navigation.navigate('Song')}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});