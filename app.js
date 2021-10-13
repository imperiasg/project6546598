"use strict";

let person={
    name: 'davlat',
    age:'22',
    job: 'programmer',

    hobbies:{
fristH:'designer',
secondH: 'copiyright'
    }
};

let jsonFile=JSON.stringify(person);

console.log(jsonFile);