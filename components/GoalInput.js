import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='input your goal'
          style={styles.input}
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}><Button title='ADD' onPress={addGoalHandler} /></View>  
          <View style={styles.button}><Button title='CANCEL' color='red' onPress={props.onCancel}/></View> 
          <View style={styles.button}><Button title='CLEAR' color='orange'/></View> 
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%'
  },
  button: {
    borderColor: 'black',
    width: '40%'
  }
});

export default GoalInput;
