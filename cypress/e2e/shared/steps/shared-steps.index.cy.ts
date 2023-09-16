import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { AUSTRIA, SYRIA, UKRAINE } from '../constants';

When('I am in the country list page', () => cy.visit('/'));

Then(`I successfully intercept the country's list API`, () =>
    cy.intercept('GET', '**/restcountries.com/**', {
        statusCode: 200,
        body: [SYRIA, UKRAINE, AUSTRIA]
    })
);

Then(`I intercept the country's list API with pending status`, () =>
    cy.intercept('GET', '**/restcountries.com/**', {
        statusCode: 200,
        delay: 10_000
    })
);

Then(`I intercept the country's list API with error status`, () =>
    cy.intercept('GET', '**/restcountries.com/**', {
        forceNetworkError: true
    })
);
