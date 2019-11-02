const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getExams: async (instituteCode, token, from, to) => {
		const queryParameters = {
			DatumTol: from,
			DatumIg: to
		};

		const examsResponse = await request.get(config.paths.examPath, instituteCode, token, queryParameters);
		return examsResponse.body;
	}
};
