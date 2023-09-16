import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

const dictionary: Record<'moon' | 'sun', 'Moon Icon' | 'Sun Icon'> = {
    moon: 'Moon Icon',
    sun: 'Sun Icon'
};

Then('I see {string} title', (title: string) =>
    cy.get('[data-test="main-title"]').should('contain', title)
);

Then(
    'I see the theme switcher {string} icon with the text {string}',
    (icon: 'moon' | 'sun', value: string) => {
        cy.get(`[data-test="${icon}-icon"]`).should(
            'contain',
            dictionary[icon]
        );
        cy.get('[data-test="theme-switcher-text"]').should('contain', value);
    }
);

When('I click on the {string} theme-switcher icon', (icon: 'moon' | 'sun') =>
    cy.get(`[data-test="${icon}-icon"]`).click()
);

Then('I see a {string} background color', (backgroundColor: 'light' | 'dark') =>
    cy.get('body').should('have.class', backgroundColor)
);
