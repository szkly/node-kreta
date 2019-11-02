const request = require("request-promise-native").defaults({ resolveWithFullResponse: true });
const config = require("../config");

module.exports = {
	simpleGet: async url => {
		const options = {
			url: url,
			headers: {
				apiKey: config.apiKey
			},
			json: true
		};

		return await request.get(options);
	},

	get: async (path, instituteCode, token, queryParameters) => {
		queryParameters = queryParameters || {};

		const options = {
			url: `https://${instituteCode}.e-kreta.hu/mapi/api/v1/${path}?`,
			qs: queryParameters,
			headers: {
				Authorization: `Bearer ${token}`
			},
			json: true
		};

		return await request.get(options);
	},

	post: async (url, bodyString) => {
		const options = {
			url: url,
			body: bodyString
		};

		const response = await request.post(options);

		return response;
	}
};
