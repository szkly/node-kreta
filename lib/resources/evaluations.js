const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getEvaluations: async (token, from, to) => {
        const queryParameters = {
            fromDate: from,
            toDate: to 
        }
        
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token, queryParameters);
		return studentResponse.body.Evaluations;
	},

	getLatestEvaluation: async (token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);
		const latestEvaluation = studentResponse.body.Evaluations[0];
		return latestEvaluation;
	}
};
