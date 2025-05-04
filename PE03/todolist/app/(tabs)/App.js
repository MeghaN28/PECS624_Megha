import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './ToDoList';
import TabBar from './TabBar';

/*
Main entry point of the app.

The main component controls three state elements consisting of todos and inputValue and the filter type selection between All, Active, and Completed.

The component manages addition processes and deletion of todos and enables the marking of todos as completed or not.

The application shows filtered todos from the chosen tab while rendering every child component.


*/
let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    };
    todoIndex++;

    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state);
    });
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  render() {
    const { inputValue, todos, type } = this.state;

    const filteredTodos = todos.filter((todo) => {
      if (type === 'All') return true;
      if (type === 'Completed') return todo.complete;
      if (type === 'Active') return !todo.complete;
    });

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={filteredTodos}
          />
          <Button submitTodo={this.submitTodo} />
          <TabBar
            type={type}
            setType={(type) => this.setState({ type })}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
