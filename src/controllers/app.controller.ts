import { Controller, Get, HTTPStatus, type APIRes } from "sidra";

@Controller()
export class AppController {
	@Get()
	ping(): APIRes<string> {
		return {
			data: "Pong!",
			message: "Ping",
			statusCode: HTTPStatus.OK,
		};
	}
}
