import { standardTypeChecked } from '@vue/eslint-config-standard-with-typescript';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
    // 1. Global Ignores (Files and directories to exclude from linting)
    {
        ignores: ['dist/**', 'node_modules/**']
    },

    // 2. Base Configurations (Recommended standard rules)
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommendedTypeChecked,
    vueTsConfigs.stylisticTypeChecked,
    standardTypeChecked,

    // 3. Language and Parser Options
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    // Allows linting the ESLint config file itself even if it's not explicitly included in a tsconfig.json
                    allowDefaultProject: ['eslint.config.ts']
                }
            }
        }
    },

    // 4. Custom Rules
    {
        rules: {
            // Stylistic preferences you requested
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/indent': ['error', 4],

            // Standard preference to keep your strings consistent
            '@stylistic/quotes': ['error', 'single'],

            // Professional best practices for Node.js environments
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
        }
    }
);
