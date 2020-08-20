module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
};