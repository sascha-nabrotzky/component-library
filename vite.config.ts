/// <reference types="vitest/config" />
import dts from 'vite-plugin-dts'; // manually installed, for type declarations
import peerDependencies from './package.json';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname =
    typeof __dirname !== 'undefined'
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ['**/*.stories.ts', '**/*.test.ts'],
            // insertTypesEntry: true will add "types": "dist/index.d.ts" to your package.json
            insertTypesEntry: true,
            // Specify config path, otherwise no d.ts files are generated
            tsconfigPath: './tsconfig.app.json',
        }),
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
        },
    },
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
        ],
    },
    build: {
        lib: {
            // Entry point for the library build process
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'sn-ui',
            fileName: (format) => `sn-ui.${format}.js`,
            formats: ['es', 'cjs', 'umd'],
        },
        rollupOptions: {
            external: Object.keys({ peerDependencies }),
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
