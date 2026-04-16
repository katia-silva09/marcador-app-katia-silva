import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Team from "./components/team";

import FAB from "./components/FAB";
import { useState } from "react";

export default function App() {
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);

  const resetAll = () => {
    setTeam1(0);
    setTeam2(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEAMS</Text>
      <View style={styles.teamsContainer}>
        <Team name="Team 1" points={team1} setPoints={setTeam1} />
        <Team name="Team 2" points={team2} setPoints={setTeam2} />
      </View>{" "}
      <FAB
        label="RESET"
        onPress={resetAll}
        onLongPress={resetAll}
        position="center"
      />
      <StatusBar style="dark" />
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
