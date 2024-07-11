import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { Themes } from "../assets/Themes/index.js";

export default function SongScreen({ navigation, route }) {

const { index,  imageUrl,  songTitle,  songArtists,  albumName,  duration  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{songTitle}</Text>
      <Image 
        style={styles.picture}
        source={{uri: imageUrl,}}/>
      <Text style={styles.text}>By: {JSON.stringify(songArtists[0].name)}</Text>
      <Text style={styles.text}>Album: {albumName}</Text>
      {/* <Text style={styles.text}>Time: {duration/1000}</Text> */}
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
  title: {
    color: "white", 
    fontSize: 30
  }, 
  text: {
    color: "white", 
    fontSize: 20
  }, 
  picture: {
    width: 200,
    height: 200,
  },
});