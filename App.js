import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [showModal, setShowModal] = useState(false)

  const addGoalHandler = courseGoal => {
    setCourseGoals(current => [
      ...current,
      { id: Math.random().toString(), value: courseGoal }
    ])
    setShowModal(false)
  }

  const removeGoalHandler = id => {
    setCourseGoals(current => current.filter(i => i.id !== id))
  }

  return (
    <View style={styles.screen}>
      <Button onPress={() => setShowModal(!showModal)} title="Add Goal" />
      <GoalInput
        visible={showModal}
        onAddGoal={addGoalHandler}
        onCancel={() => setShowModal(false)}
      />
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem onDeleteItem={removeGoalHandler} item={itemData.item} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})
