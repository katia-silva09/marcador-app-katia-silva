import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FAB from "./FAB";

interface Props {
  position?: "left" | "right";
  name: string;
  points?: number;
}
export default function Team({ name, points = 0 }: Props) {
  const [count, setCount] = useState(points);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.score}>{count}</Text>
      <StatusBar style="dark" />
      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position="right"
      />
      <FAB
        label="-1"
        onPress={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
        onLongPress={() => setCount(0)}
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
