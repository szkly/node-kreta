const request = require("request-promise-native").defaults({
	resolveWithFullResponse: true,
	json: true
});
const config = require("../config");

module.exports = {
	get: async (urlType, path, instituteCode, token, queryParameters) => {
		token = token || null;
		queryParameters = queryParameters || {};

		const options = {
			url: generateUrl(urlType, path, instituteCode),
			qs: queryParameters,
			headers: {
				apiKey: config.apiKey
			},
			auth: {
				bearer: token
			}
		};

		return await request.get(options);
	},

	post: async (urlType, path, instituteCode, form) => {
		const options = {
			url: generateUrl(urlType, path, instituteCode),
			form: form
		};

		return await request.post(options);
	}
};

generateUrl = (urlType, path, instituteCode) => {
	path = path || "";
	instituteCode = instituteCode || null;

	switch (urlType) {
		case "api":
			return `https://${instituteCode}.e-kreta.hu/mapi/api/v1/${path}`;
		case "auth":
			return `https://${instituteCode}.e-kreta.hu/idp/api/v1/${path}`;
		case "institutes":
			return `https://kretaglobalmobileapi.ekreta.hu/api/v1/Institute/${path}`;
	}
};
