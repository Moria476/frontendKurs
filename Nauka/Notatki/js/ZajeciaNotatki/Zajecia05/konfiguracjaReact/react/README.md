1. wykonac kroki z webpacka
2. usunac main.js
3. npm i react react-dom
4. utworzyc webpack.config.js
5. do webpack.config.js wrzucić

const path = require('path')
module.exports = {
entry: path.resolve(**dirname, 'src', 'index.js'),
output: {
path: path.resolve(**dirname, 'dist'),
filename: 'bundle.js'
}
}

6. w index.js podmienić na
   (() => {
   console.log('webpack worked')
   })()

7. npx webpack --config webpack.config.js
8. do index.html
   <!DOCTYPE html>
   <html>

<head>
  <meta charset="utf-8">
  <title>Complete React Webpack Configuration</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>

<body>
  <div id="app"></div>
  <script src="bundle.js" async defer></script>
</body>

</html>
9. npm i @babel/core @babel/preset-env @babel/preset-react babel-loader
10. do webpack.config.js wkleić

const path = require('path')

module.exports = {
entry: path.resolve(**dirname, 'src', 'index.js'),
output: {
path: path.resolve(**dirname, 'dist'),
filename: 'bundle.js'
},
module: {
rules: [
{
test: /\.(jsx|js)$/,
include: path.resolve(\_\_dirname, 'src'),
exclude: /node_modules/,
use: [{
loader: 'babel-loader',
options: {
presets: [
['@babel/preset-env', {
"targets": "defaults"
}],
'@babel/preset-react'
]
}
}]
}
]
}
}

11.npx browserslist 'defaults'

12. do index.js
    import React from 'react'
    import ReactDOM from 'react-dom'
    ReactDOM.render(
    React.createElement('div', null, `Hello React`),
    document.getElementById('app')
    )
13. npx webpack --config webpack.config.js
14. npm i webpack-dev-server --save-dev
15. przekleic w webpack config.js
    const path = require('path')

module.exports = {
entry: path.resolve(**dirname, 'src', 'index.js'),
output: {
path: path.resolve(**dirname, 'dist'),
filename: 'bundle.js'
},
devServer: {
contentBase: path.resolve(**dirname, 'dist'),
open: true,
clientLogLevel: 'silent',
port: 9000
},
module: {
rules: [
{
test: /\.(jsx|js)$/,
include: path.resolve(**dirname, 'src'),
exclude: /node_modules/,
use: [{
loader: 'babel-loader',
options: {
presets: [
['@babel/preset-env', {
"targets": "defaults"
}],
'@babel/preset-react'
]
}
}]
}
]
}
}

16. w package json dokleić po test pamietajac o przecinku
    "develop": "webpack-dev-server"
17. do index.js
    import React from 'react'
    import ReactDOM from 'react-dom'

ReactDOM.render(
React.createElement('div', null, `Complete Guide to Webpack Configuration for React`),
document.getElementById('app')
)
18.npm run develop
