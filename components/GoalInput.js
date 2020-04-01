import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = props => {
  const [courseGoal, setCourseGoal] = useState('')

  const addGoal = () => {
    props.onAddGoal(courseGoal)
    setCourseGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={value => setCourseGoal(value)}
          placeholder="Course Goal"
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button onPress={addGoal} title="ADD" />
          </View>
          <View style={styles.button}>
            <Button onPress={props.onCancel} title="CANCEL" color="red" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '45%'
  }
})

export default GoalInput
