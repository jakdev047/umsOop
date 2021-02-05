const Employee = require("./employee");

const _title = Symbol('title');

class Staff extends Employee {
    constractor(id, name, title) {
        super(id, name);
        this[_title] = title;
    }

    get title() {
        return this[_title];
    }

    set title(value) {
        this[_title] = value;
    }

    toString() {
        return `${super.toString()}, Title: ${this[_title]}`;
    }
}

module.exports = Staff;