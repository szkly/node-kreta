const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getExams: async (instituteCode, token, from, to) => {
		const queryParameters = {
			DatumTol: from,
			DatumIg: to
		};

		const examsResponse = await request.get(config.urlTypes.API ,config.paths.EXAM, instituteCode, token, queryParameters);
		return examsResponse.body;
	}
};
