ECMAScript 6 (ES6) Learning Project
Overview
This project focuses on learning ECMAScript 6 (ES6), also known as ECMAScript 2015, which is a major update to the JavaScript language. ES6 introduces several new features and syntax enhancements that improve the development experience and allow for more expressive and concise code.

Learning Objectives
By the end of this project, you should be able to explain the following concepts without the need for external assistance:

What ES6 is and its significance in JavaScript development
New features introduced in ES6 compared to previous versions
The distinction between constants and variables in ES6
Block-scoped variables and their behavior
Arrow functions and their advantages, especially regarding function parameters
Default parameters in function declarations and arrow functions
Rest parameters and their usage for handling variable-length argument lists
String templating and its benefits over traditional string concatenation
Object creation and property initialization using ES6 syntax
Iterators and their role in iterating over data collections
Utilizing the for-of loop to iterate through iterable objects
Requirements
General
All files must be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
Allowed editors include vi, vim, emacs, and Visual Studio Code.
All files should end with a new line.
A README.md file at the root of the project folder is mandatory.
Code files should use the .js extension.
Code will be tested using the Jest Testing Framework.
Code will be analyzed using ESLint with specific rules provided.
All functions must be exported.
Setup
Install NodeJS 12.11.x:
bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify NodeJS installation:
bash
Copy code
nodejs -v
npm -v
Install Jest, Babel, and ESLint in your project directory:
bash
Copy code
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
Configuration files
package.json: Manage project dependencies.
babel.config.js: Configure Babel for transpiling ES6 code.
.eslintrc.js: Configure ESLint rules for code analysis.
Final Step
Don't forget to run npm install from the terminal of your project folder to install all necessary dependencies.