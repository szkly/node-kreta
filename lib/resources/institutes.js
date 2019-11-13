const request = require("../utils/request-utilities");
const config = require("../config");

module.exports = {
	getInstitutes: async () => {
		const institutesResponse = await request.get(config.urlTypes.INSTITUTES);
		return institutesResponse.body;
	},

	getInstitute: async instituteId => {
		const instituteResponse = await request.get(config.urlTypes.INSTITUTES, instituteId);
		return instituteResponse.body;
	}
};
