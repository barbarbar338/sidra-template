import { Bootstrap, SetGlobalPrefix } from "sidra";
import express, { Express } from "express";

import "./controllers/hello";

const app = express();

function main(expressApp: Express) {
	SetGlobalPrefix("/v1");
	const listener = Bootstrap(expressApp, 3000);
	return listener;
}

const listener = main(app);
export { listener, app };
