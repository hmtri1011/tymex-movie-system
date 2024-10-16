module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	modulePathIgnorePatterns: ['<rootDir>/dist/'],
	setupFilesAfterEnv: ['<rootDir>/src/libs/__mocks__/prisma.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json'
		}
	}
}
