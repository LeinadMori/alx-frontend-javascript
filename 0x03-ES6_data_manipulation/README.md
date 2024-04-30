# ES6 Data Manipulation

This repository contains JavaScript functions for manipulating data structures and performing operations using ES6 features such as map, filter, reduce, and more.

## Installation

1. Make sure you have Node.js 12.11.x installed. If not, follow the setup instructions provided in the project.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required dependencies.

## Usage

Each JavaScript file in the repository contains a specific function or set of functions. To use them:

1. Import the desired function(s) into your JavaScript file.
2. Call the function(s) with appropriate arguments as needed.
3. Execute your JavaScript file using Node.js.

Example usage:

```javascript
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const sum = getStudentIdsSum(students);
console.log("Total sum of student IDs:", sum);
