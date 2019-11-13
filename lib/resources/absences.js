const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getAbsences: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		return studentResponse.body.Absences;
	},

	getLatestAbsence: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		const latestAbsence = studentResponse.body.Absences[0];
		return latestAbsence;
	}
};
