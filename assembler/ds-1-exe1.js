/* Write a function that receives the student object as a parameter and that 
 * appends to all the values of the object the value of ‘Edited’ 
 * (example: firstName: ‘Ana Edited’), adds a new property of the object 
 * named grade with the value of 9.5 (grade: 9.5) and that removes the role property. 
 * The function should return a new object with the values changed and the new property 
 * without mutating the original object. */

const student = { firstName: 'Ana', lastName: 'Marks', role: 'STUDENT' };
function appendEdited(object) {
    const modified = Object.assign({}, object);
    for ( key in modified ) {
        modified[key] = modified[key].concat(' Edited');
    };
    modified.grade = 9.5;
    return modified;
};

console.log(appendEdited(student));
