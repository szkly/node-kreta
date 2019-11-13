const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getEvaluations: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		return studentResponse.body.Evaluations;
	},

	getLatestEvaluation: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		const latestEvaluation = studentResponse.body.Evaluations[0];
		return latestEvaluation;
	}
};
