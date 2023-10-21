import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on the {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on Pricing button", () => {
  cy.get("#radix-\\:R1bd63m\\: > span > span").click();
});
When("I click on Massaging Api button", () => {
  cy.get("#6XXyLeKQp0xVXRwyPX85OR").click();
});
Then("I should see FAQ title and FAQ's buttons", () => {
  cy.get("#faq-messaging").should("be.visible");
  cy.get(".c-cUhiIV.c-cUhiIV-ijUWDQN-css").should("be.visible");
});

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on the Pricing button", () => {
  cy.get("#radix-\\:R1bd63m\\: > span > span").click();
});
When("I click on the Massaging Api button", () => {
  cy.get("#6XXyLeKQp0xVXRwyPX85OR").click();
});
Then("I should see {float} imgs in section {string}", function (float, string) {
  cy.get("div .c-fGHEql.c-fiJFTo").should("have.length.gt", 0);
});
