import { Bootstrap, SetGlobalPrefix } from "sidra";
import express, { Express } from "express";

import { PingContoller } from "./controllers/ping";
import { HelloContoller } from "./controllers/hello";
import { ImageContoller } from "./controllers/image";

const app = express();

function main(expressApp: Express) {
	SetGlobalPrefix("/v1");
	const listener = Bootstrap(
		expressApp,
		[PingContoller, HelloContoller, ImageContoller],
		3000,
		{
			debugLog: process.env.NODE_ENV !== "production"
		}
	);
	return listener;
}

const listener = main(app);
export { listener, app };
