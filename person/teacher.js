const Employee = require("./employee");

const _subject = Symbol('subject');

class Teacher extends Employee {
    constractor(id, name, subject) {
        super(id, name);
        this[_subject] = subject;
    }

    get subject() {
        return this[_subject];
    }

    set subject(value) {
        this[_subject] = value;
    }

    toString() {
        return `${super.toString()}, Subject: ${this[_subject]}`;
    }
}

module.exports = Teacher;