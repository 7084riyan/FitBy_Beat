# BMI Calculator Automation Testing  
This project focuses on end-to-end automation testing for the **BMI Calculator** feature. The tests were implemented using Cypress to demonstrate automation testing skills.

[![Fit By Beat Web](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://fitbybeat.com/)

---

## Table of Contents  
- [BMI Calculator Automation Testing](#bmi-calculator-automation-testing)  
  - [Features Tested](#features-tested)  
  - [Tech Stack](#tech-stack)  
  - [Installation and Setup](#installation-and-setup)  
  - [Running the Tests](#running-the-tests)  
    - [Interactive Mode](#interactive-mode)  
    - [Headless Mode](#headless-mode)  
  - [Video Demonstration](#video-demonstration)  
  - [Credits](#credits)  

---

## Features Tested  
1. **BMI Calculator Functionality**  
   - **Positive Test Cases:** Valid inputs (age, weight and height) result in correct BMI calculation and proper display.
   - **Negative Test Cases:** Invalid inputs (e.g., negative values or empty fields) prompt an error message requesting valid data.

---

## Tech Stack  
- **Cypress.io**  
- **JavaScript**  
- **Node.js**  
- **Visual Studio Code**  
- **Google Chrome**  

---

## Installation and Setup  
To set up and run this project locally:

1. **Clone the repository**  
   ```bash  
   git clone https://github.com/7084riyan/FitBy_Beat.git  
   cd FitBy_Beat  
   ```  

2. **Install dependencies**  
   Make sure you have Node.js installed, then run:  
   ```bash  
   npm install  
   ```

---

## Running the Tests  

### Interactive Mode  
Run Cypress Test Runner to view and interact with the tests:  
```bash  
npx cypress open  
```  

### Headless Mode  
Run the tests in headless mode to execute them without a graphical interface:  
```bash  
npx cypress run  
```  

---

## Video Demonstration  
### BMI Calculator Feature Test Execution  
- **Positive Scenario:**  Tests successful BMI calculation with valid inputs.  
   [![Test Demo](https://img.youtube.com/vi/jYJOIKbxA5Y/maxresdefault.jpg)](https://www.youtube.com/embed/jYJOIKbxA5Y)

- **Negative Scenario:** Tests error handling with invalid inputs.  
   [![Test Demo](https://img.youtube.com/vi/_vvWINaAQBE/maxresdefault.jpg)](https://www.youtube.com/embed/_vvWINaAQBE)

---

## Credits  
Created by [Riyan](https://github.com/7084riyan)  
```
