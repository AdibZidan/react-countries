import { Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/fixtures/countries/country-input-filter/index.cy';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then(
    'I see the {string} {string} message',
    (message: string, status: 'error' | 'loading') =>
        cy.getByDataTest(`country-list-${status}`).should('contain', message)
);

Then('I see the country list card skeletons', () => {
    const TOTAL_ELEMENTS = 30;

    cy.get('section').within(() =>
        cy
            .getByDataTest('country-list-skeleton-card')
            .should('be.visible')
            .should('have.length', TOTAL_ELEMENTS)
    );
});

Then('I see the country list error message', () =>
    cy.getByDataTest('country-list-error-message').should('be.visible')
);

Then('I see the country list empty with no results found message', () =>
    cy.getByDataTest('country-list-empty-list').should('be.visible')
);
