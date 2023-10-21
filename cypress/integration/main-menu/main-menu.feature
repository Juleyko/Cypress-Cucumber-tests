Feature: Home page

Scenario: Navigating to "See All Products" Page
    Given Open the website
    When I click on the "Main Menu" button
    Given I click on "Product" button
    Given I click on "See All Products" button
    Then See All Products page is displayed

Scenario: Check all drop-down elements in menu
    Given Visit the website
    When I click on "Main Menu" button
    Then I should see Products, Pricing, Why Telnyx, Resources, Developers buttons

Scenario: Check titles
     Given I Visit the website
     Then I should see main title and three h2 titles

