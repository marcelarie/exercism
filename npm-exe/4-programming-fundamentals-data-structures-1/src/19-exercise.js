/**
 * 1. Create an array with the grades of the students
 *    using one of the built in array loops such as
 *    forEach, map, etcera
 *
 * 2. Return the array of grades.
 */
function exercise19() {
    const students = [
        {
            firstName: 'David',
            lastName: 'Jones',
            grade: 8,
        },
        {
            firstName: 'Maria',
            lastName: 'Lee',
            grade: 9,
        },
        {
            firstName: 'Paul',
            lastName: 'Garcia',
            grade: 5,
        },
        {
            firstName: 'Michael',
            lastName: 'Brown',
            grade: 6,
        },
    ];
    return arr = students.map(i => i.grade)
}
module.exports = exercise19;
