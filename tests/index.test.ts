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
	it("Sending Buffer (/v1/image/banner)", (done) => {
		request(app)
			.get("/v1/image/banner")
			.end((_, res) => {
				expect(res.status).to.equal(200);
				expect(Buffer.isBuffer(res.body)).to.be.true;
				done();
			});
	});
	it("404 Handling (/v1/some/random/path)", (done) => {
		request(app)
			.get("/v1/some/random/path")
			.end((_, res) => {
				expect(res.body).to.haveOwnProperty("statusCode", 404);
				expect(res.body).to.haveOwnProperty("error", "Not Found");
				expect(res.body).to.haveOwnProperty("message", "Route not found");
				done();
			});
	});
	after((done) => {
		listener.close(done);
	});
});
