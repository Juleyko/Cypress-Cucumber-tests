Feature: Customer Stories page

Scenario: Check customer-stories
    Given Open the website
    When I click on the "Main Menu" button
    When I click on Resources button
    When I click on Customer Stories button
    Then I should see main title

Scenario: Check all imgs and videos on Customer stories page
    Given I Open the website
    When I click on "Main Menu" button
    When I click on the Resources button
    When I click on the Customer Stories button
    Then I should see all imgs near footer

