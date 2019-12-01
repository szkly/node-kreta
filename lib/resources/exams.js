const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getExams: async (token, from, to) => {
		const queryParameters = {
			DatumTol: from,
			DatumIg: to
		};

		const examsResponse = await request.get(config.urlTypes.API, config.paths.EXAM, token, queryParameters);
		return examsResponse.body;
	}
};
