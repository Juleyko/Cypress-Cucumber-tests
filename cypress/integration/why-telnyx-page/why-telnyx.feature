Feature: Why Telnyx page

Scenario: Check titles in Why Telnyx
    Given Open the website
    When I click on the "Main Menu" button
    When I click on Why Telnyx button
    When I click on Overview button
    Then I should see main title, text after main title, the first and the second h2

Scenario: Check all imgs and videos on Why Telnyx page
    Given I Open the website
    When I click on "Main Menu" button
    When I click on the Why Telnyx button
    When I click on the Overview button
    Then I should see 2 imgs and 3 videos