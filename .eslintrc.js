module.exports = {
    //Refer https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        // eslint recommended rules enabled
        "accessor-pairs": 0,
        "array-bracket-newline": 0,
        "array-bracket-spacing": 0,
        "array-callback-return": 0,
        "array-element-newline": 0,
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "arrow-spacing": 0,
        "block-scoped-var": 0,
        "block-spacing": 0,
        "brace-style": 0,
        "callback-return": 0,
        "camelcase": 0,
        "capitalized-comments": 0,
        "class-methods-use-this": 0,
        "comma-dangle": 0,
        "comma-spacing": 0,
        "comma-style": 0,
        "complexity": 0,
        "computed-property-spacing": 0,
        "consistent-return": 0,
        "consistent-this": 0,
        "constructor-super": 2,
        "curly": 0,
        "default-case": 0,
        "dot-location": 0,
        "dot-notation": 0,
        "eol-last": 0,
        "eqeqeq": 0,
        "for-direction": 2,
        "func-call-spacing": 0,
        "func-name-matching": 0,
        "func-names": 0,
        "func-style": 0,
        "function-paren-newline": 0,
        "generator-star-spacing": 0,
        "getter-return": 2,
        "global-require": 0,
        "guard-for-in": 0,
        "handle-callback-err": 0,
        "id-blacklist": 0,
        "id-length": 0,
        "id-match": 0,
        "implicit-arrow-linebreak": 0,
        "indent": 0,
        "indent-legacy": 0,
        "init-declarations": 0,
        "jsx-quotes": 0,
        "key-spacing": 0,
        "keyword-spacing": 0,
        "line-comment-position": 0,
        "linebreak-style": 0,
        "lines-around-comment": 0,
        "lines-around-directive": 0,
        "lines-between-class-members": 0,
        "max-classes-per-file": 0,
        "max-depth": 0,
        "max-len": 0,
        "max-lines": 0,
        "max-lines-per-function": 0,
        "max-nested-callbacks": 0,
        "max-params": 0,
        "max-statements": 0,
        "max-statements-per-line": 0,
        "multiline-comment-style": 0,
        "multiline-ternary": 0,
        "new-cap": 0,
        "new-parens": 0,
        "newline-after-var": 0,
        "newline-before-return": 0,
        "newline-per-chained-call": 0,
        "no-alert": 0,
        "no-array-constructor": 0,
        "no-async-promise-executor": 0,
        "no-await-in-loop": 0,
        "no-bitwise": 0,
        "no-buffer-constructor": 0,
        "no-caller": 0,
        "no-case-declarations": 2,
        "no-catch-shadow": 0,
        "no-class-assign": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-confusing-arrow": 0,
        "no-console": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-continue": 0,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 0,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-duplicate-imports": 0,
        "no-else-return": 0,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-empty-function": 0,
        "no-empty-pattern": 2,
        "no-eq-null": 0,
        "no-eval": 0,
        "no-ex-assign": 2,
        "no-extend-native": 0,
        "no-extra-bind": 0,
        "no-extra-boolean-cast": 2,
        "no-extra-label": 0,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 0,
        "no-func-assign": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 0,
        "no-implicit-globals": 0,
        "no-implied-eval": 0,
        "no-inline-comments": 0,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-invalid-this": 0,
        "no-irregular-whitespace": 2,
        "no-iterator": 0,
        "no-label-var": 0,
        "no-labels": 0,
        "no-lone-blocks": 0,
        "no-lonely-if": 0,
        "no-loop-func": 0,
        "no-magic-numbers": 0,
        "no-misleading-character-class": 0,
        "no-mixed-operators": 0,
        "no-mixed-requires": 0,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-assign": 0,
        "no-multi-spaces": 0,
        "no-multi-str": 0,
        "no-multiple-empty-lines": 0,
        "no-native-reassign": 0,
        "no-negated-condition": 0,
        "no-negated-in-lhs": 0,
        "no-nested-ternary": 0,
        "no-new": 0,
        "no-new-func": 0,
        "no-new-object": 0,
        "no-new-require": 0,
        "no-new-symbol": 2,
        "no-new-wrappers": 0,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 0,
        "no-param-reassign": 0,
        "no-path-concat": 0,
        "no-plusplus": 0,
        "no-process-env": 0,
        "no-process-exit": 0,
        "no-proto": 0,
        "no-prototype-builtins": 0,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-restricted-globals": 0,
        "no-restricted-imports": 0,
        "no-restricted-modules": 0,
        "no-restricted-properties": 0,
        "no-restricted-syntax": 0,
        "no-return-assign": 0,
        "no-return-await": 0,
        "no-script-url": 0,
        "no-self-assign": 2,
        "no-self-compare": 0,
        "no-sequences": 0,
        "no-shadow": 0,
        "no-shadow-restricted-names": 0,
        "no-spaced-func": 0,
        "no-sparse-arrays": 2,
        "no-sync": 0,
        "no-tabs": 0,
        "no-template-curly-in-string": 0,
        "no-ternary": 0,
        "no-this-before-super": 2,
        "no-throw-literal": 0,
        "no-trailing-spaces": 0,
        "no-undef": 0,
        "no-undef-init": 0,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unexpected-multiline": 2,
        "no-unmodified-loop-condition": 0,
        "no-unneeded-ternary": 0,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "no-unused-expressions": 0,
        "no-unused-labels": 2,
        "no-unused-vars": 2,
        "no-use-before-define": 0,
        "no-useless-call": 0,
        "no-useless-computed-key": 0,
        "no-useless-concat": 0,
        "no-useless-constructor": 0,
        "no-useless-escape": 2,
        "no-useless-rename": 0,
        "no-useless-return": 0,
        "no-var": 0,
        "no-void": 0,
        "no-warning-comments": 0,
        "no-whitespace-before-property": 0,
        "no-with": 0,
        "nonblock-statement-body-position": 0,
        "object-curly-newline": 0,
        "object-curly-spacing": 0,
        "object-property-newline": 0,
        "object-shorthand": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "operator-assignment": 0,
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "padding-line-between-statements": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-destructuring": 0,
        "prefer-numeric-literals": 0,
        "prefer-object-spread": 0,
        "prefer-promise-reject-2s": 0,
        "prefer-reflect": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 0,
        "prefer-template": 0,
        "quote-props": 0,
        "quotes": 0,
        "radix": 0,
        "require-atomic-updates": 0,
        "require-await": 0,
        "require-jsdoc": 0,
        "require-unicode-regexp": 0,
        "require-yield": 2,
        "rest-spread-spacing": 0,
        "semi": 0,
        "semi-spacing": 0,
        "semi-style": 0,
        "sort-imports": 0,
        "sort-keys": 0,
        "sort-vars": 0,
        "space-before-blocks": 0,
        "space-before-function-paren": 0,
        "space-in-parens": 0,
        "space-infix-ops": 0,
        "space-unary-ops": 0,
        "spaced-comment": 0,
        "strict": 0,
        "switch-colon-spacing": 0,
        "symbol-description": 0,
        "template-curly-spacing": 0,
        "template-tag-spacing": 0,
        "unicode-bom": 0,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        "vars-on-top": 0,
        "wrap-iife": 0,
        "wrap-regex": 0,
        "yield-star-spacing": 0,
        "yoda": 0
    }
};