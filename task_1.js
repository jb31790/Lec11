#!/usr/bin/env node

let person = '{ "name": "John", "age": 42, "email": "john.doe@fakemail.com" }';
console.log(person);

let jsonPerson = JSON.parse(person);
console.log(jsonPerson);
