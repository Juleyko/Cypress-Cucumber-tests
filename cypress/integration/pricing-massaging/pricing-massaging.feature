Feature: Pricing massaging page

Scenario: Pricing massaging page
    Given I Open the website
    When I click on the "Main Menu" button
    When I click on Pricing button
    When I click on Massaging Api button
    Then I should see FAQ title and FAQ's buttons

Scenario: Check all imgs and videos on Massaging API page
    Given Open the website
    When I click on "Main Menu" button
    When I click on the Pricing button
    When I click on the Massaging Api button
    Then I should see 3 imgs in section "See pricing for other products"