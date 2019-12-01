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

class Kreta {
	async login(instituteCode, username, password) {
		return await auth.login(instituteCode, username, password);
	}

	async refreshTokens(instituteCode, refreshToken = refreshToken) {
		return await auth.refreshTokens(instituteCode, refreshToken);
	}

	async getAbsences(accessToken) {
		return await absences.getAbsences(accessToken);
	}

	async getLatestAbsence(accessToken) {
		return await absences.getLatestAbsence(accessToken);
	}

	async getEvaluations(accessToken, subject) {
		return await evaluations.getEvaluations(accessToken, subject);
	}

	async getLatestEvaluation(accessToken) {
		return await evaluations.getLatestEvaluation(accessToken);
	}

	async getExams(accessToken) {
		return await exams.getExams(accessToken);
	}

	async getTeacherHomework(accessToken, from, to) {
		return await homework.getTeacherHomework(accessToken, from, to);
	}

	async getStudentHomework(accessToken, from, to) {
		return await homework.getStudentHomework(accessToken, from, to);
	}

	async getInstitute(instituteId) {
		return await institutes.getInstitute(instituteId);
	}

	async getInstitutes() {
		return await institutes.getInstitutes();
	}

	async getNotes(accessToken) {
		return await notes.getNotes(accessToken);
	}

	async getLatestNote(accessToken) {
		return await notes.getLatestNote(accessToken);
	}

	async getStudent(accessToken) {
		return await student.getStudent(accessToken);
	}

	async getStudentId(accessToken) {
		return await student.getStudentId(accessToken);
	}

	async getFormTeacher(accessToken) {
		return await student.getFormTeacher(accessToken);
	}

	async getSubjectAverages(accessToken) {
		return await subjectAverages.getSubjectAverages(accessToken);
	}

	async getTimetable(accessToken, from, to) {
		return await timetable.getTimetable(accessToken, from, to);
	}

	async getCancelledLessons(accessToken, from, to) {
		return await timetable.getCancelledLessons(accessToken, from, to);
	}

	async getSubstitutions(accessToken, from, to) {
		return await timetable.getSubstitutions(accessToken, from, to);
	}
}

module.exports = Kreta;
