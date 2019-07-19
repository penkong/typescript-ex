// npm i -g typescript ts-node
// compile tsc file.ts
// ts-node = tsc index.ts + node index.js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// types = methods + props like string or num;
// Todo is also type
// interfaces in ts use to define the structure of obj
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

// type notation => help to specify correct params on call
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    the todo with id: ${id}
    has title of: ${title}
    is it finished? ${completed}
  `);
};
