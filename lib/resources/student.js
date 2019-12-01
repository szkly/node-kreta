const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getStudent: async token => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);

		const student = {
			StudentId: studentResponse.body.StudentId,
			Name: studentResponse.body.Name,
			PlaceOfBirth: studentResponse.body.PlaceOfBirth,
			MothersName: studentResponse.body.MothersName,
			AddressDataList: studentResponse.body.AddressDataList,
			FormTeacher: studentResponse.body.FormTeacher,
			Tutelaries: studentResponse.body.Tutelaries
		};

		return student;
	},

	getStudentId: async token => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);

		return studentResponse.body.StudentId;
	},

	getFormTeacher: async token => {
		const studentResponse = await request.get(config.urlTypes.API, config.paths.STUDENT, token);

		return studentResponse.body.FormTeacher;
	}
};
