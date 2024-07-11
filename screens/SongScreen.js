import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { Themes } from "../assets/Themes/index.js";

export default function SongScreen({ navigation, route }) {

const { index,  imageUrl,  songTitle,  songArtists,  albumName,  duration  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.songTitle}>{songTitle}</Text>
      <Image 
        style={styles.albumCover}
        source={{uri: imageUrl,}}/>
      {/* <Text style={styles.songArtists}>By: {JSON.stringify(songArtists[0].name)}</Text> */}
      <Text numberOfLines={1} style={styles.songArtists}>
        {songArtists.map((artist, index) => 
          index===songArtists.length-1 ? artist.name : artist.name + ", "
        )}
      </Text>
      <Text style={styles.albumName}>Album: {albumName}</Text>
      {/* <Text style={styles.text}>Time: {duration/1000}</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  albumCover: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  songArtists: {
    fontSize: 20,
    marginVertical: 10,
  },
  albumName: {
    fontSize: 18,
    color: '#666',
  },
  duration: {
    fontSize: 18,
    color: '#666',
  },
  // title: {
  //   color: "white", 
  //   fontSize: 30, 
  //   fontFamily: "notoserif",
  // }, 
  // text: {
  //   color: "white", 
  //   fontSize: 20
  // }, 
  // picture: {
  //   width: 200,
  //   height: 200,
  // },
});