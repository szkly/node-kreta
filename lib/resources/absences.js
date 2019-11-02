const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getAbsences: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		return studentResponse.body.Absences;
	},

	getLatestAbsence: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		const latestAbsence = studentResponse.body.Absences[0];
		return latestAbsence;
	}
};
