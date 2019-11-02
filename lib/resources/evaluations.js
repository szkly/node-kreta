const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getEvaluations: async (instituteCode, token, subject) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);

		const evaluations = studentResponse.body.Evaluations;

		if (subject) {
			return evaluations.filter(evaluation => evaluation["Subject"] == subject);
		}

		return evaluations;
	},

	getLatestEvaluation: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		const latestEvaluation = studentResponse.body.Evaluations[0];
		return latestEvaluation;
	}
};
