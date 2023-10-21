import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on the {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on Resources button", () => {
  cy.get("#radix-\\:R1dd63m\\: > span > span").click();
});
When("I click on Customer Stories button", () => {
  cy.get("#qRNDPKue9wLBsbz6Ry6D7").click();
});
Then("I should see main title", () => {
  cy.get("h1").should("be.visible");
});

Given("I Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on the Resources button", () => {
  cy.get("#radix-\\:R1dd63m\\: > span > span").click();
});
When("I click on the Customer Stories button", () => {
  cy.get("#qRNDPKue9wLBsbz6Ry6D7").click();
});
Then("I should see all imgs near footer", () => {
  cy.get(".c-dwOMim").should("have.length.gt", 0);
});
