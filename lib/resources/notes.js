const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getNotes: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		return studentResponse.body.Notes;
	},

	getLatestNote: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		const latestNote = studentResponse.body.Notes[0];

		return latestNote;
	}
};
