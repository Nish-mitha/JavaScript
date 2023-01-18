/**
 * The Object.assign() method is used to copy the values and properties from one or more source objects to a target object. 
 * It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target. 
 * It returns the target object which has properties and values copied from the source object.
 * Object.assign() does not throw on null or undefined source values. 
 */

//Combine multiple Data of a Student to a single record 


let studnetRecord = {};
const academicRecord = {
    "Physics": 300,
    "Maths": 500,
    "Biology": 1000,
    "Chemistry": 400
};

const sportsRecord = {
    "Throwball": "100 Points",
    "Cricket": "2000 Points"
};

const culturalRecord = {
    "Singing": "190 Points",
    "Dancing": "2300 Points"
};

Object.assign(studnetRecord, academicRecord, sportsRecord, culturalRecord);

console.log(studnetRecord);