import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit home page", () => {
  cy.visit("https://telnyx.com/");
});

Then("I should see main logo", () => {
  cy.get(".c-buvHyO.c-buvHyO-idbhasO-css").should("be.visible");
});
