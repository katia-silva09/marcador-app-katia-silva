import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FAB from "./FAB";

interface Props {
  name: string;
  points: number;
  setPoints: (value: number) => void;
}

export default function Team({ name, points, setPoints }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.score}>{points}</Text>

      <FAB
        label="+1"
        onPress={() => setPoints(points + 1)}
        onLongPress={() => setPoints(0)}
        position="right"
      />

      <FAB
        label="-1"
        onPress={() => setPoints(points - 1 >= 0 ? points - 1 : 0)}
        onLongPress={() => setPoints(0)}
        position="left"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 24,
  },
  score: {
    fontSize: 100,
    fontWeight: "300",
  },
});
