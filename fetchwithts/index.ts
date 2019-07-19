// npm i -g typescript ts-node
// compile tsc file.ts
// ts-node = tsc index.ts + node index.js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(res => {
  console.log(res.data);
});
