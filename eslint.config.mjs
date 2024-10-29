import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]}*/
export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    {
        ignores: ['node_modules']
    },
    {
        rules: {
            indent: "error",
            "space-before-blocks": "error",
            "keyword-spacing": "error",
            "space-infix-ops": "error",
            "space-in-parens": "error",
            "brace-style": "error",
            "comma-spacing": "error",
            "array-bracket-spacing": "error",
            "no-multi-spaces": "error",
            "no-multiple-empty-lines": "error",
            "computed-property-spacing": "error",
            "func-call-spacing": "error",

            "max-len": ["error", {
                code: 80,
            }],

            semi: "error",
            "no-use-before-define": "error",
            "no-array-constructor": "error",
        }
    }
];