const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	getInstitutes: async () => {
		const institutesResponse = await request.simpleGet(config.instituteUrl);
		return institutesResponse.body;
	},

	getInstitute: async instituteId => {
		const instituteResponse = await request.simpleGet(config.instituteUrl + "/" + instituteId);
		return instituteResponse.body;
	}
};
