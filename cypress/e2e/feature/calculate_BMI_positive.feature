@positive
Feature: BMI Calculator Functionality

  Background:
    Given I visit the BMI calculator page

  Scenario Outline: Successful BMI calculation with valid input
    Given I enter a height of "<height>" cm
    And I enter a weight of "<weight>" kg
    And I enter an age of "<age>" years
    And I select "<sex>" as my sex
    And I select "<activity>" as my activity level
    When I click on the "Calculate" button
    Then I should see the message "<expected_message>" on the screen

    Examples:
      | height | weight | age | sex    | activity                                  | expected_message |
      | 180    | 75     | 25  | Male   | Moderate Exercise, sports 3 - 5 days/ week  | Your BMI is     |
      | 165    | 55     | 28  | Female | Light exercise/ sports 1 - 3 days/ week     | Your BMI is     |
