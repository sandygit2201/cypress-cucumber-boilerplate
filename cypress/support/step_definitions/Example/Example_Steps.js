import {Given} from "cypress-cucumber-preprocessor/steps";

Given("Invoke SauceDemo URL",  () => {
   cy.visit(Cypress.config().sauceDemoURL)
});
Given("Login as standard_user", () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
});
Given("Invoke Google Page",  () => {
    cy.visit(Cypress.config().googleURL)
});
Given("Invoke Amazon Page",  () => {

    cy.visit(Cypress.config().amazonURL)
});
Given("Invoke facebook Page",  () => {
    cy.visit(Cypress.config().facebookURL)
});