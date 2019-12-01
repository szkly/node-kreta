const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getAbsences: async (token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);
		return studentResponse.body.Absences;
	},

	getLatestAbsence: async (token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);
		const latestAbsence = studentResponse.body.Absences[0];
		return latestAbsence;
	}
};
