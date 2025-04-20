

# Input  
The application starts its operation by requesting information from a user using TextInput fields. The application requests users to submit their selection for their preferred MSCS class (e.g., “CS624”). The favoriteCourse state variable updates in real-time when users enter text through the useState hook of React.

# Process  
The main functionality of the application exists inside a functional component that uses an arrow function. The application relies on React Native core components including ScrollView for scrolling and View together with Text, Image and TextInput for layout and user interaction. The application saves the chosen favorite course and presents it to the user upon subsequent display. The application utilizes StyleSheet.create() to define internal styles which format its elements.

# Output  
The application presents MSCS courses as a scrolling list which divides them into Core (8), Depth of Study (2) and Capstone (1) sections. The application presents the user's selected favorite course automatically under the input field while generating an interactive visual output.

