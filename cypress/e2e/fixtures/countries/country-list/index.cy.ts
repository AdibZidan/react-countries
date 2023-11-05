import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/fixtures/countries/country-input-filter/index.cy';
import 'cypress/e2e/fixtures/countries/country-input-region-filter/index.cy';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then('I see a total of {string} countries', (total: number) =>
    cy.getByDataTest('country-card').should('have.length', total)
);

Then('I see the following country card information:', (dataTable: DataTable) =>
    dataTable
        .hashes()
        .forEach(({ SRC, NAME, POPULATION, REGION, CAPITAL }, index) => {
            cy.getByDataTest('country-card-image')
                .eq(index)
                .should('have.attr', 'src', SRC);
            cy.getByDataTest('country-card-image')
                .eq(index)
                .should('have.attr', 'alt')
                .should('not.be.empty');
            cy.getByDataTest('country-card-heading')
                .eq(index)
                .should('contain', NAME);
            cy.getByDataTest('country-card-population')
                .eq(index)
                .should('contain', POPULATION);
            cy.getByDataTest('country-card-region')
                .eq(index)
                .should('contain', REGION);
            cy.getByDataTest('country-card-capital')
                .eq(index)
                .should('contain', CAPITAL);
        })
);
