export default [
  {
    ignores: ['template/**', '.grading/**', 'node_modules/**']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
      document: 'readonly',
      localStorage: 'readonly',
      challenges: 'readonly'
      }
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'error',
      eqeqeq: 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error'
    }
  }
];
