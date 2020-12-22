import { APIRes, Controller, Get, HTTPStatus } from "sidra";

@Controller("/hello")
export default class HelloContoller {
	@Get("/world")
	sayHelloWorld(): APIRes<null> {
		return {
			statusCode: HTTPStatus.OK,
			message: "Hello, world!",
			data: null,
		};
	}
}
