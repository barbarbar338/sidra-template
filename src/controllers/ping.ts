import { APIRes, Controller, Get, HTTPStatus } from "sidra";

@Controller("/ping")
export class PingController {
	@Get("/")
	getPing(): APIRes<null> {
		return {
			statusCode: HTTPStatus.OK,
			message: "Pong!",
			data: null,
		};
	}

	@Get("/hello")
	sayHelloWorld(): APIRes<null> {
		return {
			statusCode: HTTPStatus.OK,
			message: "Hello, world!",
			data: null,
		};
	}
}
