const request = require("request-promise-native").defaults({
	resolveWithFullResponse: true,
	json: true
});
const config = require("../config");

module.exports = {
	get: async (urlType, path, token, queryParameters) => {
		token = token || null;
		queryParameters = queryParameters || {};

		let instituteCode = "";
		if (token) {
			const payload = decodeToken(token);
			instituteCode = payload["kreta:institute_code"];
		}

		const options = {
			url: generateUrl(urlType, path, instituteCode),
			qs: queryParameters,
			headers: {
				apiKey: config.apiKey,
				"User-Agent": generateUserAgent()
			},
			auth: {
				bearer: token
			}
		};

		try {
			return await request.get(options);
		} catch (err) {
			console.error(err);
		}
	},

	post: async (urlType, path, instituteCode, form) => {
		const options = {
			url: generateUrl(urlType, path, instituteCode),
			form: form,
			headers: {
				"User-Agent": generateUserAgent()
			}
		};

		try {
			return await request.post(options);
		} catch (err) {
			console.error(err);
		}
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

generateUserAgent = () => {
    const codename = config.codenames[Math.floor(Math.random * config.codenames.length)];
    const version = `${Math.floor(Math.random * 10)}.${Math.floor(Math.random * 10)}`
	return `Kreta.Ellenorzo/2.9.8 (Android; ${codename} ${version})`;
};

decodeToken = string => {
	string = string.split(".")[1];

	switch (string.length % 4) {
		case 2:
			string += "==";
			break;

		case 3:
			string += "=";
			break;
	}

	return JSON.parse(Buffer.from(string, "base64").toString());
};
