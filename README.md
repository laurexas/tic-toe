## Simple tic-toe game

This game was recreated using React, Redux, LocalStorage API and SASS for styling.

Official React docs for tic toe game:  https://reactjs.org/tutorial/tutorial.html



### Game rules: 

The game is played on a grid that's 3 squares by 3 squares.
You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
When all 9 squares are full, the game is over.

### Game functionality

State change is saved in LocalStorage so on page refresh application state remains the same.
Button 'start new game' cleans localstorage and returns default state;
State is managed by redux and application state is saved in store and so it can be accessed by any UI component using useSelector method.

### Installation

First you have to download this repository to your computer, go to projects directory you have downloaded using terminal and run script : 'npm install'. After installation process is done and all required dependencies are installed run script 'npm start' to run the app in the development mode.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.
