@Login
Feature: To validate login functionality

  Background: 
    Given User is in login page

  Scenario: To validate login using different credentials
    When User enter username and password
      | td1 |
    And User click login button
    Then User validate successful login
