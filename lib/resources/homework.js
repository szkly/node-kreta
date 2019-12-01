const request = require("../utils/request-utilities");
const timetable = require("./timetable");

const config = require("../config");

const getHomework = async (token, path, from, to) => {
	const timetableResponse = await timetable.getTimetable(token, from, to);

	const homeworkIds = timetableResponse.filter(lesson => lesson["TeacherHomeworkId"]);

	homework = {};
	if (homeworkIds > 0) {
		homeworkIds.forEach(async id => {
			const homeworkResponse = await request.get(config.urlTypes.API, `${config.paths.HOMEWORK}/${path}/${id}`, token);
			homework.push(homeworkResponse.body);
		});
	}
	return homework;
};

module.exports = {
	getTeacherHomework: async (token, from, to) => {
		return await getHomework(token, config.paths.TEACHER_HOMEWORK, from, to);
	},

	getStudentHomework: async (token, from, to) => {
		return await getHomework(token, config.paths.STUDENT_HOMEWORK, from, to);
	}
};
