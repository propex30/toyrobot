# Toy Robot Simulator

The Toy Robot Simulator is a CLI application built in TypeScript. It simulates a robot moving on a 5x5 unit tabletop based on user commands.

## Installation and Setup

1. Clone this repository and navigate into the directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run start` to start the application.

## Functionality

The application implements the toy robot simulation with the following commands: `PLACE X,Y,F`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT`. The `PLACE` command puts the toy robot on the table in position `X,Y` and facing `F` (north, south, east, west). The other commands move the robot around and report its current position.

## Code Quality

The codebase follows clean code principles with well-structured, self-descriptive, and easy-to-read code. Constants are used instead of magic numbers to improve code readability. In addition, the project is modularized, splitting functionality across multiple files for better organization and maintenance.

## Testing

The application is tested using Jest. Run `npm run test` to execute the tests. I used a combination of unit and integration tests to ensure all major functionalities are working as expected.

## Problem Solving

The approach to problem-solving in this project involved breaking down the larger problem of the toy robot simulation into smaller, manageable tasks, such as input parsing, handling individual commands, and maintaining the state of the robot.

## Tradeoffs

I decided to use recursion for user input to keep the CLI running and accepting commands. However, if the application was to be scaled or handling an immense amount of commands, this approach may lead to a stack overflow. An iterative approach would be better for handling larger scale applications.

## Future Improvements

With more time, I could have included:
1. More comprehensive test coverage including edge cases.
2. A graphical UI for better user experience.
3. More complex commands for the robot, such as diagonal movement or predefined path following.

