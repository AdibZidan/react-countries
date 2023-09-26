import { Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then(
    'I see the {string} {string} message',
    (message: string, status: 'error' | 'loading') =>
        cy.getByDataTest(`country-list-${status}`).should('contain', message)
);
