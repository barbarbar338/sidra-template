import {
	APIRes,
	BadRequestException,
	Controller,
	Get,
	HTTPStatus,
	Param,
	Query,
} from "sidra";

@Controller("/hello")
export class HelloController {
	@Get("/query")
	sayHelloToUserWithQuery(@Query("user") user: string): APIRes<null> {
		if (!user) throw new BadRequestException("user query is required");
		return {
			statusCode: HTTPStatus.OK,
			message: `Hello, ${user}!`,
			data: null,
		};
	}

	@Get("/:user")
	sayHelloToUser(@Param("user") user: string): APIRes<null> {
		return {
			statusCode: HTTPStatus.OK,
			message: `Hello, ${user}!`,
			data: null,
		};
	}
}
