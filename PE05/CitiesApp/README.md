Input

Users can contribute city names and countries via the AddCity screen and they can contribute country names and currencies via the AddCountry screen. Any changes in the input fields are instantly reflected in the component’s state, so the data is available to submit right away.

Process

The app checks to see if every required field is filled after the input is submitted. When a valid input is used, a brand new object is created for each unique city or country and it is assigned an ID. After that, these objects are saved in the root component’s state for the app. Buttons at the bottom of the app switch between screens and send updated data as props, making sure data on each tab is real-time.

Output

On the Cities tab, you can see all of your saved cities and the countries where they are and on the Countries tab, you get a list of the countries you have entered and their currencies. If data is missing, a central note is shown to the user explaining this.
