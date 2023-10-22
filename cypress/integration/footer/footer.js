import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});

When("I scroll to footer", () => {
  cy.get("footer .c-kzQxuT").scrollIntoView();
});

Then("I should see the Links,Media Icons and © Telnyx LLC 2023", () => {
  cy.get("ul.c-bznZTK").should("be.visible");
  cy.get("ul.c-cLfYON").should("be.visible");
});
