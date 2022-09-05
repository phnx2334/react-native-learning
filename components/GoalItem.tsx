import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import type { ItemData } from "../App";

interface GoalItemProps {
  itemData: ItemData;
  onDelete: (id: number) => void;
  id: number;
}

const GoalItem: React.FC<GoalItemProps> = ({ itemData, onDelete, id }) => {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: { color: "white" },
});

export default GoalItem;
