import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Open the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on the {string} button", function (selector) {
  cy.get("button.c-gMsfuT").click();
});
Given('Click on "Product" button', () => {
  cy.get("#radix-\\:R19d63m\\: > span > span").click();
});
Given('Click on "See All Products" button', () => {
  cy.get("div > div.c-jEQANY > a > span > span").click();
});

Then("See All Products page is displayed", () => {
  cy.get("#__next").should("be.visible");
});

Given("Visit the website", () => {
  cy.visit("https://telnyx.com/");
});
When("I click on {string} button", function (selector) {
  cy.get("button.c-gMsfuT").click();
});
Then(
  "I should see Products, Pricing, Why Telnyx, Resources, Developers buttons",
  () => {
    cy.get("#radix-\\:R19d63m\\: > span > span").should("be.visible");
    cy.get("#radix-\\:R1bd63m\\: > span > span").should("be.visible");
    cy.get("#radix-\\:R1cd63m\\: > span > span").should("be.visible");
    cy.get("#radix-\\:R1dd63m\\: > span > span").should("be.visible");
    cy.get("#radix-\\:R1ed63m\\: > span").should("be.visible");
  }
);

Given("I Visit the website", () => {
  cy.visit("https://telnyx.com/");
});
Then("I should see main title and three h2 titles", () => {
  cy.get("h1").should("be.visible");
  cy.contains("SEE PRODUCTS").should("be.visible");
  cy.contains("CREATE A FREE ACCOUNT").should("be.visible");
  cy.contains("LEARN ABOUT THE EDGE").should("be.visible");
});
