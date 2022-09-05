import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export type ItemData = { item: { text: string; id: number } };

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    Array<{ text: string; id: number }> | []
  >([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => {
      return [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random() },
      ];
    });
  }

  function deleteGoalHandler(id: number) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                onDelete={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: { flex: 5 },
});
