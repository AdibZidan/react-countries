import { Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/fixtures/countries/country-list/index.cy';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then('I see the country list search filters', () => {
    cy.getByDataTest('country-list-input-filter-container').within(() => {
        cy.getByDataTest('country-list-input-filter-label').should(
            'have.text',
            'Search for a country...'
        );
        cy.getByDataTest('country-list-input-filter').should(
            'have.attr',
            'placeholder',
            'Search for a country...'
        );
    });
});

Then('I type {string} in the country list filter', (searchTerm: string) =>
    cy.getByDataTest('country-list-input-filter').type(searchTerm)
);
