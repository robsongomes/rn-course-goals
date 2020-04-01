import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GoalItem = props => (
  <TouchableOpacity onPress={() => props.onDeleteItem(props.item.id)}>
    <View style={styles.itemList}>
      <Text>{props.item.value}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  }
})

export default GoalItem
