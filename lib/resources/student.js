const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getStudent: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);

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

	getStudentId: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);

		return studentResponse.body.StudentId;
	},

	getFormTeacher: async (instituteCode, token) => {
		const studentResponse = await request.get(config.paths.studentPath, instituteCode, token);

		return studentResponse.body.FormTeacher;
	}
};
