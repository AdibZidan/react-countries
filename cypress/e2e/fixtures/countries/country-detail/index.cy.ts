import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';
import { COUNTRY_DETAIL_BORDER } from 'cypress/e2e/shared/constants';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';
import { CountryName } from 'cypress/e2e/shared/types';
import '../country-list/index.cy';

Then('I click on the Back button', () =>
    cy.get('[data-test="country-detail-navigate-back-button"]').click()
);

Then('I see the {string} country detail name', (countryName: CountryName) =>
    cy
        .get('[data-test="country-detail-heading"]')
        .should('contain.text', countryName)
);

Then('I verify the following country details:', (dataTable: DataTable) =>
    dataTable.hashes().forEach(({ LABEL, VALUE }, index) => {
        cy.get('[data-test="country-detail-information-label"]')
            .eq(index)
            .should('contain', LABEL);
        cy.get('[data-test="country-detail-information-value"]')
            .eq(index)
            .should('contain', VALUE);
    })
);

Then(
    'I see the following {string} Border Countries:',
    (countryName: CountryName, dataTable: DataTable) => {
        const expected = COUNTRY_DETAIL_BORDER[countryName];
        const borderCountriesToTest = dataTable.raw().join(' ').split(' ');

        const actual = borderCountriesToTest.every(borderCountry =>
            expected.includes(borderCountry)
        );

        expect(borderCountriesToTest).to.have.lengthOf(expected.length);
        expect(actual).to.be.true;
    }
);

Then('I verify the country detail has {string} image source', (src: string) =>
    cy.get('[data-test="country-detail-image"]').should('have.attr', 'src', src)
);

Then('I click on {string} border country', (borderCountryName: string) =>
    cy.get(`[data-test="country-detail-${borderCountryName}-button"]`).click()
);
