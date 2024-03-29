const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getNotes: async (token, from, to) => {
		const queryParameters = {
			fromDate: from,
			toDate: to
		};

		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token, queryParameters);
		return studentResponse.body.Notes;
	},

	getLatestNote: async token => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);
		const latestNote = studentResponse.body.Notes[0];

		return latestNote;
	}
};
