import { Text, Pressable, StyleSheet } from "react-native";

interface Props {
  label: string;
  position?: "left" | "right";
  onPress: () => void;
  onLongPress: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButt,
        position === "right" ? styles.positionRigth : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButt: {
    position: "absolute",
    backgroundColor: "#866098",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  positionRigth: {
    right: 20,
    bottom: 20,
  },
  positionLeft: {
    left: 20,
    bottom: 20,
  },
});
