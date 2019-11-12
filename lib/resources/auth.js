const request = require("../utils/request-utilites");
const config = require("../config");

module.exports = {
	login: async (instituteCode, username, password) => {
		const form = {
			institute_code: instituteCode,
			userName: username,
			password: password,
			grant_type: "password",
			client_id: config.clientId
		};

		const response = await request.post(`https://${instituteCode}.e-kreta.hu/idp/api/v1/Token`, form);

		return response.body;
	},

	refreshTokens: async (instituteCode, refreshToken) => {
		const form = {
			refresh_token: refreshToken,
			grant_type: "refresh_token",
			client_id: config.clientId
		};

		const response = await request.post(`https://${instituteCode}.e-kreta.hu/idp/api/v1/Token`, form);

		return response.body;
	}
};
