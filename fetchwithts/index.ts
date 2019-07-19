// npm i -g typescript ts-node
// compile tsc file.ts
// ts-node = tsc index.ts + node index.js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interfaces in ts use to define the structure of obj
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  console.log(`
    the todo with id: ${ID}
    has title of: ${title}
    is it finished? ${finished}
  `);
});
