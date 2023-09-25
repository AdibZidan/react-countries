/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-test attribute.
         * @example cy.getByDataTest('country-list-input-filter-container')
         */
        getByDataTest(dataTest: string): Chainable<JQuery<HTMLElement>>;
    }
}
