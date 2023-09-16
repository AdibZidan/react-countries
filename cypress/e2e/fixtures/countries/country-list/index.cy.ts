import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';
import 'cypress/e2e/shared/steps/shared-steps.index.cy';

Then('I see {string} section', (section: string) =>
    cy.get('.main-title').contains(section).should('exist')
);

Then('I see a total of {string} countries', (total: number) =>
    cy.get(`[data-test="country-card"]`).should('have.length', total)
);

Then('I see the following country card information:', (dataTable: DataTable) =>
    dataTable
        .hashes()
        .forEach(({ SRC, NAME, POPULATION, REGION, CAPITAL }, index) => {
            cy.get('[data-test="country-card-image"]')
                .eq(index)
                .should('have.attr', 'src', SRC);
            cy.get('[data-test="country-card-image"]')
                .eq(index)
                .should('have.attr', 'alt')
                .should('not.be.empty');
            cy.get('[data-test="country-card-heading"]')
                .eq(index)
                .should('contain', NAME);
            cy.get('[data-test="country-card-population"]')
                .eq(index)
                .should('contain', POPULATION);
            cy.get('[data-test="country-card-region"]')
                .eq(index)
                .should('contain', REGION);
            cy.get('[data-test="country-card-capital"]')
                .eq(index)
                .should('contain', CAPITAL);
        })
);
