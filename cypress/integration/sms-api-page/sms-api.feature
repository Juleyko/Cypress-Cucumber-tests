Feature: Products page

Scenario: Check How it works in Products
    Given Open the website
    When I click on the "Main Menu" button
    When I click on Product button
    When I click on SMS API button
    Then I should see title How it works, How it works buttons and Talk to an expert button

Scenario: Check main title and text on SMS API page
    Given I Open the website
    When I click on "Main Menu" button
    When I click on the Product button
    When I click on the SMS API button
    Then I should see main title, text after main title and 4 logos


Scenario: Check all imgs and videos on SMS API page
    Given I Open it website
    When User click on "Main Menu" button
    When User click on the Product button
    When User click on the SMS API button
    Then I should see img near main title, video near How it works, imgs near footer
