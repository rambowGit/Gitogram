const { TransitionGroup } = require("vue");

module.exports = {
	"env": {    
		"browser": true,
		"es2021": true,
		"node": true,
		"jest/globals": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"vue",
		"jest"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
