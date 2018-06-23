module.exports = {
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "rules": {
        "comma-dangle": [
            "error",
            "never"
        ],
        'no-console': 'off',
        'indent': 'off',
        'linebreak-style': 'off',
        'no-trailing-spaces': 'off',
        'eol-last': 'off',
        'key-spacing': 'off'
    },
    "globals": {
        'console': true
    }
};
