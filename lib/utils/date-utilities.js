module.exports = {
	getDate: (date = new Date(), daysDiff = 0) => {
		date.setDate(date.getDate() + daysDiff);

		return date;
	},

	getNearestMonday: () => {
		const currentDate = new Date();
		const currentDay = currentDate.getDay();
		const daysDiff = currentDay == 6 ? 6 - currentDay + 1 : currentDay * -1;
		currentDate.setDate(currentDate.getDate() + daysDiff);
		return currentDate;
	},

	toDateString: date => {
		return date.toISOString().substring(0, 10);
	}
};
