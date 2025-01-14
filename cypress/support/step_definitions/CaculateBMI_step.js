import BMIPage from '../../e2e/Pages/BMIpages';
import { Given,When,Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the BMI calculator page', () => {
  cy.visit('https://fitbybeat.com/');
});

Given('I enter a height of {string} cm', (height) => {
    BMIPage.heightInput.clear().type(height);
});

Given('I enter a weight of {string} kg', (weight) => {
    BMIPage.weightInput.clear().type(weight);
});

Given('I enter an age of {string} years', (age) => {
    BMIPage.ageInput.clear().type(age);
});

Given('I select {string} as my sex', (sex) => {
    BMIPage.selectSex(sex);
});

Given('I select {string} as my activity level', (activityLevel) => {
    BMIPage.selectActivityLevel(activityLevel);
});

When('I click on the {string} button', () => {
    BMIPage.calculate();
});

Then('I should see the message {string} on the screen', (message) => {
    BMIPage.verifyBMIResult(message);
});