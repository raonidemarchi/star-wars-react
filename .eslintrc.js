module.exports = {
    "extends": ["airbnb"],
    "rules": {
        "semi": [1, "never"],
        "space-before-function-paren": [1, "never"],
        "no-underscore-dangle": 0,
        "keyword-spacing": 0,
        "space-before-blocks": 0,
        "linebreak-style": ["error", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "parser": "babel-eslint",
    "env": {
      "browser": true
    }
}
