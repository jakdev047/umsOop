const Person = require("./person");

const _profession = Symbol('profession');
const _income = Symbol('income');

class Guardian extends Person {
    constructor(id, name, profession, income) {
        super(id, name);
        this[_profession] = profession;
        this[_income] = income;
    }

    get profession() {
        return this[_profession];
    }

    set profession(value) {
        return this[_profession] = value;
    }

    get _income() {
        return this[__income];
    }

    set _income(value) {
        return this[__income] = value;
    }

    toString() {
        return `${super.toString()}, Profession = ${this[_profession]}, Income = ${this[_income]}`;
    }
};

module.exports = Guardian;