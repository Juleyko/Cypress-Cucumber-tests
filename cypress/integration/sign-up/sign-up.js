import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});

When("I click on {string} button", function (buttonText) {
  cy.contains("Sign up").click();
});
Then("I should see Sign-up page is displayed", () => {
  cy.get("div#__next").should("be.visible");
});
When("I enter First name, Last name, Email, Password", () => {
  cy.get("#email").clear();
  cy.get("#email").type("plyshka1@hive.com");
  cy.get("#first_name").type("Jull");
  cy.get("#last_name").clear();
  cy.get("#last_name").type("Bobo");
  cy.get("#password").clear();
  cy.get("#password").type("12pasWord#3");
});
When("I click on checkbox", () => {
  cy.get("#terms_and_conditions").click();
});
When("User click on {string} button", function (buttonText) {
  cy.contains("Sign up").click();
});
Then("The {string} pop-up is displayed", function (selector) {
  cy.get(".c-buvHyO.c-buvHyO-igXgZdb-css").should("be.visible");
});
