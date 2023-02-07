module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,vue}',
        '!**/node_modules/**'
    ],
    testMatch: [
        '**/tests/unit/**/*.spec.(ts|tsx|js)'
    ]
}
