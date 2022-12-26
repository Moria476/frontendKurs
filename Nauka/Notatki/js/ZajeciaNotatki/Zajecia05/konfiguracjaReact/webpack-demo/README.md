https://webpack.js.org/guides/getting-started/

1. stworzyć folder webpack-demo
2. npm init -y
3. npm install webpack webpack-cli --D
4. utworz index.html , folder src oraz w src index.js
5. do index.js
   function component() {
   const element = document.createElement('div');

// Lodash, currently included via a script, is required for this line to work
element.innerHTML = \_.join(['Hello', 'webpack'], ' ');

return element;
}

document.body.appendChild(component()); 6. do index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
7. w package.json usunac linijke "main": "index.js", dodajemy linijke "private": true,
8. stworzyc folder dist i przeniesc index.html
9. npm i lodash
10. import _ from 'lodash'; dac do index.js
11. usunac w index.html    <script src="https://unpkg.com/lodash@4.17.20"></script>
12. w index.html    <script src="./src/index.js"></script> zamienic na    <script src="main.js"></script>
13. npx webpack
