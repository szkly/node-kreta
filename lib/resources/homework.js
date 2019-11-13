const request = require("../utils/request-utilities");
const timetable = require("./timetable");

const config = require("../config");

const getHomework = async (instituteCode, token, path, from, to) => {
	const timetableResponse = await timetable.getTimetable(instituteCode, token, from, to);

	const homeworkIds = timetableResponse.filter(lesson => lesson["TeacherHomeworkId"]);

	homework = {};
	if (homeworkIds > 0) {
		homeworkIds.forEach(async id => {
			const homeworkResponse = await request.get(config.urlTypes.API, `${config.paths.HOMEWORK}/${path}/${id}`, instituteCode, token);
			homework.push(homeworkResponse.body);
		});
	}
	return homework;
};

module.exports = {
	getTeacherHomework: async (instituteCode, token, from, to) => {
		return await getHomework(instituteCode, token, config.paths.TEACHER_HOMEWORK, from, to);
	},

	getStudentHomework: async (instituteCode, token, from, to) => {
		return await getHomework(instituteCode, token, config.paths.STUDENT_HOMEWORK, from, to);
	}
};
