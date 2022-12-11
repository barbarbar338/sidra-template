import {
	Controller,
	Delete,
	Get,
	HTTPStatus,
	Patch,
	Post,
	type APIRes,
} from "sidra";

@Controller("/todos")
export class TodosController {
	@Get()
	getTodos(): APIRes<string> {
		return {
			data: "Pong!",
			message: "All todos here!",
			statusCode: HTTPStatus.OK,
		};
	}

	@Get("/:id")
	getTodoById(req: Request): APIRes<string> {
		const { id } = req.params;

		return {
			data: "Pong!",
			message: `Todo with id ${id}`,
			statusCode: HTTPStatus.OK,
		};
	}

	@Post()
	createTodo(): APIRes<string> {
		return {
			data: "Pong!",
			message: "Todo created",
			statusCode: HTTPStatus.CREATED,
		};
	}

	@Patch("/:id")
	updateTodo(req: Request): APIRes<string> {
		const { id } = req.params;

		return {
			data: "Pong!",
			message: `Todo updated ${id}`,
			statusCode: HTTPStatus.OK,
		};
	}

	@Delete("/:id")
	deleteTodo(req: Request): APIRes<string> {
		const { id } = req.params;

		return {
			data: "Pong!",
			message: `Todo deleted ${id}`,
			statusCode: HTTPStatus.OK,
		};
	}
}
