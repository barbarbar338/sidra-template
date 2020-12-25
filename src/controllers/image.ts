import {
    Controller,
	Get,
    Res
} from "sidra";
import { readFileSync } from "fs";
import { Response } from "express";

const buffer = readFileSync("./assets/banner.png");

@Controller("/image")
export class ImageController {
	@Get("/banner")
	returnBanner(
        @Res() res: Response
    ): Buffer {
        res.type("image/png");
        return buffer;
	}
}
