Cypress.Commands.add('getByDataTest', value =>
    cy.get(`[data-test="${value}"]`)
);
