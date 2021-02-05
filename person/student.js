const Person = require("./person");

const _stuidentId = Symbol('stuidentId');
const _guardian = Symbol('guardian');
const _exams = Symbol('exams');
const _fee = Symbol('fee');

class Student extends Person {
    constructor(id, name, stuidentId, guardian) {
        super(id, name);
        this[_stuidentId] = stuidentId;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_fee] = null;
    }

    get stuidentId() {
        return this[_stuidentId];
    }

    get guardian() {
        return this[_guardian];
    }

    get exams() {
        return this[_exams];
    }

    set exams(value) {
        return this[_exams] = value;
    }

    addExam(exam) {
        this[_exams].push(exam);
    }

    get fee() {
        return this[_fee];
    }

    set fee(value) {
        return this[_fee] = value;
    }

    toString() {
        super.toString();
        console.log(`Student Id = ${this[_stuidentId]}`);
    }
};

module.exports = Student;