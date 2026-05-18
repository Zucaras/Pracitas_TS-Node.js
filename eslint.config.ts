import { standardTypeChecked } from '@vue/eslint-config-standard-with-typescript';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  {
    ignores: ['dist/**']
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  standardTypeChecked,
  {
    files: ['eslint.config.ts'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts']
        }
      }
    }
  },
  {
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/indent': ['error', 4]
    }
  }
);