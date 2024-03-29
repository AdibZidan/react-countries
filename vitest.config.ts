import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environment: 'jsdom',
        env: { NODE_ENV: 'development' },
        setupFiles: './vitest.setup.ts',
        globals: true
    }
});
