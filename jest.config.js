module.exports = {
	"moduleFileExtensions": [
		"js",
		"json",
		"vue"
	],
	transform: { 
		"^.+\.js$" : "babel-jest", 
		".*\.(vue)$": "@vue/vue3-jest" 
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	moduleDirectories: ["node_modules", "src"],
};