import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    AUSTRIA,
    COUNTRY_DETAIL,
    COUNTRY_DETAIL_BORDER,
    SYRIA,
    UKRAINE
} from '../constants';
import { CountryName } from '../types';

Given('I am in the country list page', () => cy.visit('/'));

Given('I am in {string} country detail page', (countryName: CountryName) =>
    cy.visit(`/detail/${countryName}`)
);

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

Then(
    `I successfully intercept {string} country's detail API`,
    (countryName: CountryName) => {
        cy.intercept('GET', `**/restcountries.com/v3.1/name/${countryName}`, {
            body: [COUNTRY_DETAIL[countryName]]
        });
        cy.intercept(
            'GET',
            `**/restcountries.com/v3.1/alpha?codes=${COUNTRY_DETAIL[
                countryName
            ].borders.join(',')}**`,
            {
                body: COUNTRY_DETAIL_BORDER[countryName].map(borderCountry => ({
                    name: { common: borderCountry }
                }))
            }
        );
    }
);

Then(
    `I intercept {string} country's detail API with pending status`,
    (countryName: CountryName) =>
        cy.intercept('GET', `**/restcountries.com/v3.1/name/${countryName}`, {
            body: [COUNTRY_DETAIL[countryName]],
            delay: 10_000
        })
);

Then(
    `I intercept {string} country's detail API with error status`,
    (countryName: CountryName) =>
        cy.intercept('GET', `**/restcountries.com/v3.1/name/${countryName}`, {
            forceNetworkError: true
        })
);

Then('I click on the {string} country card', (countryName: string) =>
    cy.getByDataTest('country-card-heading').contains(countryName).click()
);

Then('I verify that the url includes {string}', (url: string) =>
    cy.url().should('include', url)
);
