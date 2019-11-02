const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getSubjectAverages: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);
		return studentResponse.body.SubjectAverages;
	}
};
