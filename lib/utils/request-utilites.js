const request = require("request-promise-native").defaults({ resolveWithFullResponse: true, json: true });
const config = require("../config");

module.exports = {
	simpleGet: async url => {
		const options = {
			url: url,
			headers: {
				apiKey: config.apiKey
			}
		};

		return await request.get(options);
	},

	get: async (path, instituteCode, token, queryParameters) => {
		queryParameters = queryParameters || {};

		const options = {
			url: `https://${instituteCode}.e-kreta.hu/mapi/api/v1/${path}?`,
			qs: queryParameters,
			auth: {
				bearer: token
			}
		};

		return await request.get(options);
	},

	post: async (url, form) => {
		const options = {
			url: url,
			form: form,
		};

		const response = await request.post(options);

		return response;
	}
};
