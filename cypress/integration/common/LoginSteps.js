import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in', () => {
    cy.visit(Cypress.env("baseURL") + "/index.php?controller=authentication&back=my-account")
    cy.get('[name="email"]').eq(0).type('cheragnvasunia@hotmail.com')
    cy.get('[name="passwd"]').type('automation')
    cy.get('[id="SubmitLogin"]').click()
    cy.contains('My wishlists').should("be.visible")
})