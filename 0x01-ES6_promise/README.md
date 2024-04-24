# 0x01. ES6 Promises

## Description
This project focuses on understanding and implementing ES6 Promises in JavaScript. It covers various aspects such as creating promises, handling asynchronous operations, using `then`, `resolve`, and `catch` methods, utilizing the `await` operator, and working with async functions.

## Project Details
- **Weight:** 1
- **Start:** Apr 23, 2024 6:00 AM
- **End:** Apr 25, 2024 6:00 AM
- **Checker Release:** Apr 23, 2024 6:00 PM
- **Auto Review Launch:** At the deadline

## Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives
By the end of this project, you should be able to:
- Explain Promises and their usage
- Utilize methods like `then`, `resolve`, `catch` of Promise objects
- Implement error handling with `throw` / `try`
- Understand and use the `await` operator
- Implement async functions effectively

## Requirements
- Operating System: Ubuntu 18.04 LTS
- NodeJS Version: 12.11.x
- Editors: vi, vim, emacs, Visual Studio Code
- Code should have the `.js` extension
- Testing with Jest (`npm run test`) and linting with ESLint
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x:
    ```
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
2. Verify NodeJS and npm version:
    ```
    nodejs -v
    v12.11.1
    npm -v
    6.11.3
    ```
3. Install Jest, Babel, and ESLint:
    ```
    npm install
    ```

## Configuration Files
Add the following files to your project directory:
- `package.json`
- `babel.config.js`
- `utils.js`
- `.eslintrc.js`

## Response Data Format
- `uploadPhoto`: `{ status: 200, body: 'photo-profile-1' }`
- `createUser`: `{ firstName: 'Guillaume', lastName: 'Salva' }`

## Tasks
1. [Keep every promise you make and only make promises you can keep](./0-main.js)
2. [Don't make a promise...if you know you can't keep it](./1-main.js)
3. [Catch me if you can!](./2-main.js)
4. [Handle multiple successful promises](./3-main.js)
5. [Simple promise](./4-main.js)
6. [Reject the promises](./5-main.js)
7. [Handle multiple promises](./6-main.js)
8. [Load balancer](./7-main.js)
9. [Throw error / try catch](./8-main.js)
10. [Throw an error](./9-main.js)s