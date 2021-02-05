const UniPerson = require("./uniPerson");

const _employeeId = Symbol('employeeId');
const _salary = Symbol('salary');

class Employee extends UniPerson {
    constructor(id, name, employeeId, salary) {
        super(id, name);
        this[_employeeId] = employeeId;
        this[_salary] = salary;
    }

    get employeeId() {
        return this[_employeeId];
    }

    get salary() {
        return this[_salary];
    }

    set salary(value) {
        return this[_salary] = value;
    }

    toString() {
        return `${super.toString()}, Employee Id = ${this[_employeeId]}, Salary = ${this[_salary]}`;
    }
};

module.exports = Employee;