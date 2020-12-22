import { APIRes, Controller, Get, HTTPStatus } from "sidra";

@Controller("/hello")
export default class HelloContoller {
	@Get("/:user")
	sayHelloToUser(@Param("user") user: string): APIRes<null> {
		return {
			statusCode: HTTPStatus.OK,
			message: `Hello, ${user}`,
			data: null,
		};
	}

	@Get("/query")
	sayHelloToUserWithQuery(@Query("user") user: string): APIRes<null> {
		return {
			statusCode: HTTPStatus.OK,
			message: `Hello, ${user}`,
			data: null,
		};
	}
}
