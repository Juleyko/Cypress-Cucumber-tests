import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on the {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on Product button", () => {
  cy.get("#radix-\\:R19d63m\\: > span > span").click();
});
When("I click on SMS API button", () => {
  cy.get("#5WvVlHUdpwqOMqyPAjErma").click();
});
Then(
  "I should see title How it works, How it works buttons and Talk to an expert button",
  () => {
    cy.contains("HOW IT WORKS").should("be.visible");
    cy.get(".c-cUhiIV.c-lgENvz").should("be.visible");
    cy.get("#3nWftK2jKNm28RWlP9QqVR").should("be.visible");
  }
);

Given("I Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("I click on the Product button", () => {
  cy.get("#radix-\\:R19d63m\\: > span > span").click();
});
When("I click on the SMS API button", () => {
  cy.get("#5WvVlHUdpwqOMqyPAjErma").click();
});
Then("I should see main title, text after main title and 4 logos", () => {
  cy.get("h1").should("be.visible");
  cy.get(".c-PJLV-ghYBfS-lead-true").should("be.visible");
  cy.get("#JLrR3H3WhaJAaSRU7UBHE").should("be.visible");
});

Given("I Open it website", () => {
  cy.visit("https://telnyx.com/");
});
When("User click on {string} button", function (string) {
  cy.get("button.c-gMsfuT").click();
});
When("User click on the Product button", () => {
  cy.get("#radix-\\:R19d63m\\: > span > span").click();
});
When("User click on the SMS API button", () => {
  cy.get("#5WvVlHUdpwqOMqyPAjErma").click();
});
Then(
  "I should see img near main title, video near How it works, imgs near footer",
  () => {
    cy.get(".c-bjYQHG").should("be.visible");
    cy.get(".c-PJLV-fRKYWh-contain-true").should("be.visible");
    cy.get(".c-eKZEkL").should("have.length.gt", 0);
  }
);
