const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getEvaluations: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		return studentResponse.body.Evaluations;
	},

	getLatestEvaluation: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		const latestEvaluation = studentResponse.body.Evaluations[0];
		return latestEvaluation;
	}
};
