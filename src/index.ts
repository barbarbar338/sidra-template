import { Handle } from "sidra";
import { AppController } from "./controllers/app.controller";
import { TodosController } from "./controllers/todos.controller";

const handler = Handle([AppController, TodosController]);

addEventListener("fetch", (event) => {
	event.respondWith(handler(event.request));
});
