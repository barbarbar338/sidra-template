import { Bootstrap, SetGlobalPrefix } from "sidra";
import express, { Express } from "express";

import { PingController } from "./controllers/ping";
import { HelloController } from "./controllers/hello";
import { ImageController } from "./controllers/image";

const app = express();

function main(expressApp: Express) {
	SetGlobalPrefix("/v1");
	const listener = Bootstrap(
		expressApp,
		[PingController, HelloController, ImageController],
		3000,
		{
			debugLog: process.env.NODE_ENV !== "production"
		}
	);
	return listener;
}

const listener = main(app);
export { listener, app };
