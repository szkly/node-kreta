const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getNotes: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		return studentResponse.body.Notes;
	},

	getLatestNote: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		const latestNote = studentResponse.body.Notes[0];

		return latestNote;
	}
};
