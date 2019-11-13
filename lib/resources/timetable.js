const request = require("../utils/request-utilities");
const dateUtils = require("../utils/date-utilities");

const config = require("../config");

module.exports = {
	getTimetable: async (instituteCode, token, from = dateUtils.toDateString(dateUtils.getNearestMonday()), to = dateUtils.toDateString(dateUtils.getDate(dateUtils.getNearestMonday(), 5))) => {
		const queryParameters = {
			fromDate: from,
			toDate: to
		};

		const timetable = await request.get(config.urlTypes.API, config.paths.LESSON, instituteCode, token, queryParameters);
		return timetable.body;
	},

	getCancelledLessons: async (instituteCode, token, from, to) => {
		const timetable = await module.exports.getTimetable(instituteCode, token, from, to);

		const cancelledLessons = timetable.filter(lesson => lesson["State"] == "Missed");

		return cancelledLessons;
	},

	getSubstitutions: async (instituteCode, token, from, to) => {
		const timetable = await module.exports.getTimetable(instituteCode, token, from, to);

		const subsittutions = timetable.filter(lesson => lesson["DeputyTeacher"]);

		return subsittutions;
	}
};
