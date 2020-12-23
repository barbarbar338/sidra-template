import { request, use, expect } from "chai";
import chaiHttp from "chai-http";
import { app, listener } from "../src";

use(chaiHttp);

describe("All Controller Tests", () => {
	describe("Ping Controller (/v1/ping)", () => {
		it("GET /", (done) => {
			request(app)
				.get("/v1/ping/")
				.end((_, res) => {
					expect(res.body).to.haveOwnProperty("statusCode", 200);
					expect(res.body).to.haveOwnProperty("message", "Pong!");
					done();
				});
		});
		it("GET /hello", (done) => {
			request(app)
				.get("/v1/ping/hello")
				.end((_, res) => {
					expect(res.body).to.haveOwnProperty("statusCode", 200);
					expect(res.body).to.haveOwnProperty("message", "Hello, world!");
					done();
				});
		});
	});
	describe("Hello Controller (/v1/hello)", () => {
		it("GET /:user", (done) => {
			request(app)
				.get("/v1/hello/Sidra")
				.end((_, res) => {
					expect(res.body).to.haveOwnProperty("statusCode", 200);
					expect(res.body).to.haveOwnProperty("message", "Hello, Sidra!");
					done();
				});
		});
		it("GET /query", (done) => {
			request(app)
				.get("/v1/hello/query")
				.end((_, res) => {
					expect(res.body).to.haveOwnProperty("statusCode", 400);
					expect(res.body).to.haveOwnProperty("error", "Bad Request");
					expect(res.body).to.haveOwnProperty("message", "user query is required");
					done();
				});
		});
		it("GET /query?user=username", (done) => {
			request(app)
				.get("/v1/hello/query?user=Sidra")
				.end((_, res) => {
					expect(res.body).to.haveOwnProperty("statusCode", 200);
					expect(res.body).to.haveOwnProperty("message", "Hello, Sidra!");
					done();
				});
		});
	});
	after((done) => {
		listener.close(done);
	});
});
