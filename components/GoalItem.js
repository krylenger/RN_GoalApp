import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  console.log(props);
  return (
    <TouchableOpacity  onPress={() => props.onDelete(props.id)} activeOpacity={0.5}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#17a5d4",
    opacity: 0.8,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default GoalItem;
