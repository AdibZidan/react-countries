import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/fixtures/countries/country-list/index.cy';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then('I click on the country list filter by region input', () =>
    cy
        .getByDataTest('country-list-region-dropdown-container')
        .within(() => cy.get('details').should('be.visible').click())
);

Then('I see the following country list regions:', (dataTable: DataTable) =>
    cy.getByDataTest('country-list-region-dropdown-container').within(() =>
        cy
            .get('details')
            .should('be.visible')
            .within(() => {
                cy.get('summary').should('contain.text', 'Filter By Region');

                dataTable
                    .hashes()
                    .forEach(({ REGION }, index) =>
                        cy
                            .getByDataTest('country-list-region-dropdown-value')
                            .eq(index)
                            .should('contain', REGION)
                    );
            })
    )
);

Then('I click on the {string} region input', (region: 'Asia' | 'Europe') =>
    cy
        .getByDataTest('country-list-region-dropdown-container')
        .within(() => cy.get('details').should('be.visible').click())
        .within(() =>
            cy
                .getByDataTest('country-list-region-dropdown-value')
                .contains(region)
                .click()
        )
);

Then('I click on the Reset button', () =>
    cy
        .getByDataTest('country-list-region-dropdown-container')
        .within(() => cy.get('details').should('be.visible').click())
        .within(() =>
            cy.get('details').within(() => cy.contains('Reset').click())
        )
);
