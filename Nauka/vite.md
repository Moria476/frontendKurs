1.  npm create vite@latest react-wprowadzenie-vite --template react
2.  wybrac wersje react javascript
3.  npm install
4.  npm run dev
5.  npm install --save styled-components
6.  npm install classnames

1.https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs
2.zmienic w eslinrc.js na cjs, prettierrc.js na cjs
3. w setting json dać "prettier.configPath": ".prettierrc.cjs",
4. wrzucic przed settingsami w  eslintrc.cjs 
"parserOptions": {
  // Required for certain syntax usages
  "ecmaVersion": 2020
},
5. npm install @babel/eslint-parser --save-dev
6. dodac przed 4pkt "parser": "@babel/eslint-parser",
7. requireConfigFile: false, przed "ecmaVersion": 2020
8. npm install --save-dev @babel/preset-react
9. stworzyc plik .babelrc a w nim dodac
{
    "presets": ["@babel/preset-react"]
  }
10. dodac  do .eslintrc.js w rules
  "react/react-in-jsx-scope": "off",
  "react/jsx-uses-react": "off",
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],

  albo 

  "react/react-in-jsx-scope": "off",
	  "react/prop-types": "off",

11. w prttier.cjs zmienic na singleQuote: false,
12. w eslintrc.cjs przed settingsami  
env: {
		browser: true,
		node: true,
	  },

13. w eslintrc.cjs w rules 
14. npm run lint
15. w package.json dopisac "format": "prettier . --write" w scripts 
16. npm run format 

