import { APIRes, Controller, Get, HTTPStatus } from "sidra";

@Controller("/ping")
export default class PingContoller {
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
