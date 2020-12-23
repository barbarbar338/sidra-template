import { Bootstrap, SetGlobalPrefix } from "sidra";
import express, { Express } from "express";

import { PingContoller } from "./controllers/ping";
import { HelloContoller } from "./controllers/hello";

const app = express();

function main(expressApp: Express) {
	SetGlobalPrefix("/v1");
	const listener = Bootstrap(
		expressApp,
		[PingContoller, HelloContoller],
		3000,
		{
			debugLog: true
		}
	);
	return listener;
}

const listener = main(app);
export { listener, app };
