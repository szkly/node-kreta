const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	login: async (instituteCode, username, password) => {
		const body = `institute_code=${instituteCode}&userName=${username}&password=${password}&grant_type=password&client_id=${config.clientId}`;
		const response = await request.post(`https://${instituteCode}.e-kreta.hu/idp/api/v1/Token`, body);

		return JSON.parse(response.body);
	},

	refreshTokens: async (instituteCode, refreshToken) => {
		const body = `refresh_token=${refreshToken}&grant_type=refresh_token&client_id=${config.clientId}`;
		const response = await request.post(`https://${instituteCode}.e-kreta.hu/idp/api/v1/Token`, body);

		return JSON.parse(response.body);
	}
};
