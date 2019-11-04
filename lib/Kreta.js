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

	async getAbsences(instituteCode, accessToken) {
		return await absences.getAbsences(instituteCode, accessToken);
	}

	async getLatestAbsence(instituteCode, accessToken) {
		return await absences.getLatestAbsence(instituteCode, accessToken);
	}

	async getEvaluations(instituteCode, accessToken, subject) {
		return await evaluations.getEvaluations(instituteCode, accessToken, subject);
	}

	async getLatestEvaluation(instituteCode, accessToken) {
		return await evaluations.getLatestEvaluation(instituteCode, accessToken);
	}

	async getExams(instituteCode, accessToken) {
		return await exams.getExams(instituteCode, accessToken);
	}

	async getTeacherHomework(instituteCode, accessToken, from, to) {
		return await homework.getTeacherHomework(instituteCode, accessToken, from, to);
	}

	async getStudentHomework(instituteCode, accessToken, from, to) {
		return await homework.getStudentHomework(instituteCode, accessToken, from, to);
	}

	async getInstitute(instituteId) {
		return await institutes.getInstitute(instituteId);
	}

	async getInstitutes() {
		return await institutes.getInstitutes();
	}

	async getNotes(instituteCode, accessToken) {
		return await notes.getNotes(instituteCode, accessToken);
	}

	async getLatestNote(instituteCode, accessToken) {
		return await notes.getLatestNote(instituteCode, accessToken);
	}

	async getStudent(instituteCode, accessToken) {
		return await student.getStudent(instituteCode, accessToken);
	}

	async getStudentId(instituteCode, accessToken) {
		return await student.getStudentId(instituteCode, accessToken);
	}

	async getFormTeacher(instituteCode, accessToken) {
		return await student.getFormTeacher(instituteCode, accessToken);
	}

	async getSubjectAverages(instituteCode, accessToken) {
		return await subjectAverages.getSubjectAverages(instituteCode, accessToken);
	}

	async getTimetable(instituteCode, accessToken, from, to) {
		return await timetable.getTimetable(instituteCode, accessToken, from, to);
	}

	async getCancelledLessons(instituteCode, accessToken, from, to) {
		return await timetable.getCancelledLessons(instituteCode, accessToken, from, to);
	}

	async getSubstitutions(instituteCode, accessToken, from, to) {
		return await timetable.getSubstitutions(instituteCode, accessToken, from, to);
	}
}

module.exports = Kreta;
