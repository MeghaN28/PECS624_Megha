import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
/*
A button to submit a new todo.

Calls submitTodo passed from App.js when pressed.
*/
const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button}
      onPress={submitTodo}>
      <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: 45,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    marginRight: 20,
    backgroundColor: '#E91E63',
    borderRadius: 5,
    justifyContent: 'center'
  },
  submit: {
    color: '#fff',
    fontWeight: '600'
  }
})

export default Button
