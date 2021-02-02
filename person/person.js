/*
    1. Symbol define
    2. constructor
    3. get & set
    4. toString method

*/

const _id = Symbol('id');
const _name = Symbol('name');
const _blood = Symbol('blood');
const _contact = Symbol('contact');

class Person {
    constructor(id, name) {
        this[_id] = id;
        this[_name] = name;
        this[_blood] = null;
        this[_contact] = null;
    }

    get id() {
        return this[_id];
    }

    get name() {
        return this[_name];
    }

    set name(value) {
        return this[_name] = value;
    }

    get blood() {
        return this[_blood];
    }

    set blood(value) {
        return this[_blood] = value;
    }

    get contact() {
        return this[_contact];
    }

    set contact(value) {
        return this[_contact] = value;
    }

    toString() {
        return `${this[_id]} - ${this[_name]}`;
    }
}

module.exports = Person;