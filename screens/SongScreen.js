import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";

export default function SongScreen({ navigation, route }) {

const { index,  imageUrl,  songTitle,  songArtists,  albumName,  duration  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.albumCover}
        source={{uri: imageUrl,}}/>
      <Text style={styles.songTitle}>{songTitle}</Text>
      <Text numberOfLines={1} style={styles.songArtists}>
        {songArtists.map( ({ name }) => `${name}`).join(", ")} 
      </Text>
      <Text style={styles.albumName}>Album: {albumName}</Text>
      <Text style={styles.duration}>{millisToMinutesAndSeconds(duration)}</Text>
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
});