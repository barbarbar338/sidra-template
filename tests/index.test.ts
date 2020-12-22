import { request, use, expect } from "chai";
import chaiHttp from "chai-http";
import { app, listener } from "../src";

use(chaiHttp);

describe("Hello Controller (/v1/hello)", () => {
	it("World route (GET /v1/hello/world)", (done) => {
		request(app)
			.get("/v1/hello/world")
			.end((_, res) => {
				expect(res.body).to.haveOwnProperty("statusCode", 200);
				expect(res.body).to.haveOwnProperty("message", "Hello, world!");
				done();
			});
	});

	after((done) => {
		listener.close(done);
	});
});
