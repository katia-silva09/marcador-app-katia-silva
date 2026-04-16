import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Team from "./components/team";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEAMS</Text>
      <StatusBar style="dark" />
      <View style={styles.teamsContainer}>
        <Team name="Team 1" points={0} />
        <Team name="Team 2" points={0} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 40,
  },
  teamsContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
