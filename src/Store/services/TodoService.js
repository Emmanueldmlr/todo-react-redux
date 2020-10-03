import HttpService from "./HttpService";

export const getTodoService = () => {
  const http = new HttpService();
  const getTodosUrl = "todos?_limit=5";
  return http
    .getData(getTodosUrl)
    .then((data) => data)
    .catch((error) => error);
};


export const updateTodoService = (item,id) => {
  const http = new HttpService();
  const getTodosUrl = `todos/${id}`;
  return http
    .putData(item,getTodosUrl)
    .then((data) => data)
    .catch((error) => error);
};
