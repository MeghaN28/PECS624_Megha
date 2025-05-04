# Input

Through a text field the program allows users to input tasks that will be included in their to-do list. The parent component’s state stores and manages all typed input information which gets distributed to child components by props. Through the props inputValue and inputChange the Input component both handles user input dynamically and shows it on the screen.

# Process

The user can trigger the  submitTodo function to insert a new task into the todos array that resides in the component state. The application features two essential functions namely toggleComplete to modify task completion state along with deleteTodo to delete tasks. The parent component controls all state operations before passing the data through props to child elements which showcase React's one-way data flow logic.

# Output

The list of tasks appears scrollable within the TodoList component. The user interface updates automatically when users mark their tasks complete or delete them from the list.
