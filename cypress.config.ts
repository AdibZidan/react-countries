import Cucumber from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        specPattern: '**/*.feature',
        supportFile: false,
        baseUrl: 'http://localhost:3000',
        async setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.PluginConfigOptions
        ): Promise<Cypress.PluginConfigOptions> {
            const { addCucumberPreprocessorPlugin } = Cucumber;

            await addCucumberPreprocessorPlugin(on, config);

            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)]
                })
            );

            return config;
        }
    }
});
