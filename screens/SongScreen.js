import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Themes } from "../assets/Themes/index.js";

export default function SongScreen({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"white"}}>Hi! This is the song screen!</Text>
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