const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getSubjectAverages: async (instituteCode, token) => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, instituteCode, token);
		return studentResponse.body.SubjectAverages;
	}
};
