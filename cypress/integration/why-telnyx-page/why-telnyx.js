import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on the {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on Why Telnyx button", () => {
  cy.get("#radix-\\:R1cd63m\\: > span > span").click();
});
When("I click on Overview button", () => {
  cy.get("#62InsTAZ5l0bTLXJn6nMKs").click();
});
Then(
  "I should see main title, text after main title, the first and the second h2",
  () => {
    cy.contains("Helping you connect—your way").should("be.visible");
    cy.contains(
      "Learn about the problems we solve and the opportunities we create."
    ).should("be.visible");
    cy.contains("Making your connections possible").should("be.visible");
    cy.contains("By making our expertise available to you").should(
      "be.visible"
    );
  }
);

Given("I Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on the Why Telnyx button", () => {
  cy.get("#radix-\\:R1cd63m\\: > span > span").click();
});
When("I click on the Overview button", () => {
  cy.get("#62InsTAZ5l0bTLXJn6nMKs").click();
});
Then("I should see 2 imgs and 3 videos", () => {
  cy.get(".c-fGHEql.c-fiJFTo.c-fGHEql-icPZZKB-css").should("have.length.gt", 0);
  cy.get(".c-PJLV.c-PJLV-iffzllr-css").should("have.length.gt", 0);
  cy.get(".c-PJLV.c-PJLV-icPZZKB-css").should("have.length.gt", 0);
});
