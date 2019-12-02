Given('element containing text {string} should be visible', (text) => {
    cy.contains(text).should('be.visible')
})

Given('element containing text {string} should not be visible', (text) => {
    cy.contains(text).should('not.be.visible')
})