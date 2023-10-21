Feature: Sign up

Scenario: Sign up
    Given Open the website
    When I click on "Sign up" button
    Then I should see Sign-up page is displayed
    When I enter First name, Last name, Email, Password
    When I click on checkbox 
    When User click on "Sign up" button
    Then The "Verification confirmation" pop-up is displayed		