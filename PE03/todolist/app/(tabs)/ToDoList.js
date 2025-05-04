import React from 'react'
import { View } from 'react-native'

import Todo from './Todo'
/*
Displays a list of todos.

Our props were maps over todos that renders the individual Todo components.

Therefore, toggleComplete and deleteTodo functions are forwarded down to each Todo.
*/
const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo} />
    )
  })

  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList