"use strict";
exports.__esModule = true;
// npm i -g typescript ts-node
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    console.log(res.data);
});
