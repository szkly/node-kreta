const auth = require("./resources/auth");
const absences = require("./resources/absences");
const evaluations = require("./resources/evaluations");
const exams = require("./resources/exams");
const homework = require("./resources/homework");
const institutes = require("./resources/institutes");
const notes = require("./resources/notes");
const student = require("./resources/student");
const subjectAverages = require("./resources/subjectAverages");
const timetable = require("./resources/timetable");

class KretaApi {
	constructor() {
		this.instituteCode = "";
		this.accessToken = "";
		this.refreshToken = "";
	}

	async init(instituteCode, username, password) {
		this.setInstituteCode(instituteCode);

		const bearer = await auth.login(this.instituteCode, username, password);

		this.setAccessToken(bearer.access_token);
		this.setRefreshToken(bearer.refresh_token);
	}

	async login(instituteCode, username, password) {
		const bearer = await auth.login(instituteCode, username, password);
		return { accessToken: bearer.access_token, refreshToken: bearer.refresh_token };
	}

	async refreshTokens(instituteCode = this.instituteCode, refreshToken = refreshToken) {
		const bearer = await auth.refreshTokens(instituteCode, refreshToken);
		this.setAccessToken(bearer.access_token);
		this.setRefreshToken(bearer.refresh_token);
		return { accessToken: bearer.access_token, refreshToken: bearer.refresh_token };
	}

	getAccessToken() {
		return this.accessToken;
	}

	getRefreshToken() {
		return this.refreshToken;
	}

	setInstituteCode(instituteCode) {
		this.instituteCode = instituteCode;
	}

	setAccessToken(accessToken) {
		this.accessToken = accessToken;
	}

	setRefreshToken(refreshToken) {
		this.refreshToken = refreshToken;
	}

	async getAbsences(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await absences.getAbsences(instituteCode, accessToken);
	}

	async getLatestAbsence(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await absences.getLatestAbsence(instituteCode, accessToken);
	}

	async getEvaluations(instituteCode = this.instituteCode, accessToken = this.accessToken, subject) {
		return await evaluations.getEvaluations(instituteCode, accessToken, subject);
	}

	async getLatestEvaluation(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await evaluations.getLatestEvaluation(instituteCode, accessToken);
	}

	async getExams(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await exams.getExams(instituteCode, accessToken);
	}

	async getTeacherHomework(instituteCode = this.instituteCode, accessToken = this.accessToken, from, to) {
		return await homework.getTeacherHomework(instituteCode, accessToken, from, to);
	}

	async getStudentHomework(instituteCode = this.instituteCode, accessToken = this.accessToken, from, to) {
		return await homework.getStudentHomework(instituteCode, accessToken, from, to);
	}

	async getInstitute(instituteId) {
		return await institutes.getInstitute(instituteId);
	}

	async getInstitutes() {
		return await institutes.getInstitutes();
	}

	async getNotes(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await notes.getNotes(instituteCode, accessToken);
	}

	async getLatestNote(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await notes.getLatestNote(instituteCode, accessToken);
	}

	async getStudent(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await student.getStudent(instituteCode, accessToken);
	}

	async getStudentId(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await student.getStudentId(instituteCode, accessToken);
	}

	async getFormTeacher(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await student.getFormTeacher(instituteCode, accessToken);
	}

	async getSubjectAverages(instituteCode = this.instituteCode, accessToken = this.accessToken) {
		return await subjectAverages.getSubjectAverages(instituteCode, accessToken);
	}

	async getTimetable(instituteCode = this.instituteCode, accessToken = this.accessToken, from, to) {
		return await timetable.getTimetable(instituteCode, accessToken, from, to);
	}

	async getCancelledLessons(instituteCode = this.instituteCode, accessToken = this.accessToken, from, to) {
		return await timetable.getCancelledLessons(instituteCode, accessToken, from, to);
	}

	async getSubstitutions(instituteCode = this.instituteCode, accessToken = this.accessToken, from, to) {
		return await timetable.getSubstitutions(instituteCode, accessToken, from, to);
	}
}

module.exports = KretaApi;
