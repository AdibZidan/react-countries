import { Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/fixtures/countries/country-input-filter/index.cy';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then('I see the country detail skeleton', () =>
    cy.getByDataTest('country-detail-skeleton').within(() => {
        cy.getByDataTest('country-detail-image-skeleton').should('be.visible');
        cy.getByDataTest('country-detail-divider-skeleton').should(
            'be.visible'
        );
        cy.getByDataTest('country-detail-buttons-skeleton').should(
            'be.visible'
        );
    })
);

Then('I see the country detail error message', () =>
    cy.getByDataTest('country-detail-error-message').should('be.visible')
);
