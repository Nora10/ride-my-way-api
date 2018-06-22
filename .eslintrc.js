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
        "no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ]
    }
};
