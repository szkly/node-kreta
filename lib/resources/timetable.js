const request = require("../utils/request-utilities");
const dateUtils = require("../utils/date-utilities");

const config = require("../config");

module.exports = {
	getTimetable: async (token, from = dateUtils.toDateString(dateUtils.getNearestMonday()), to = dateUtils.toDateString(dateUtils.getDate(dateUtils.getNearestMonday(), 5))) => {
		const queryParameters = {
			fromDate: from,
			toDate: to
		};

		const timetable = await request.get(config.urlTypes.API, config.paths.LESSON, token, queryParameters);
		return timetable.body;
	},

	getCancelledLessons: async (token, from, to) => {
		const timetable = await module.exports.getTimetable(token, from, to);

		const cancelledLessons = timetable.filter(lesson => lesson["State"] == "Missed");

		return cancelledLessons;
	},

	getSubstitutions: async (token, from, to) => {
		const timetable = await module.exports.getTimetable(token, from, to);

		const subsittutions = timetable.filter(lesson => lesson["DeputyTeacher"]);

		return subsittutions;
	}
};
