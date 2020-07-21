const { defaults } = require('jest-config');

module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    coverageReporters: ['json-summary', 'text', 'lcov'],

    // Setup Enzyme
    setupFilesAfterEnv: ['enzyme-to-json/serializer', '<rootDir>/src/setupEnzyme.ts'],
};
