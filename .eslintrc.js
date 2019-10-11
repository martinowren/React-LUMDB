module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
          "ecmascript": 6,
          "jsx": true,

    },
    
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    
    "rules": {
      "react/jsx-filename-extension": 0,
      "function-paren-newline": 0,
      // Indent with 4 spaces
      "indent": ["error", 4],
      // Indent JSX with 4 spaces
      "react/jsx-indent": ["error", 4],
      // Indent props with 4 spaces
      "react/jsx-indent-props": ["error", 4],
      "semi": ["error", "never"]
      
    }
    
  };