/**
 * Complete the function bellow to:
 *
 * Return:
 * the total of the numbers in the 'ingresos' array
 * minus
 * the the total of the numbers in the 'gastos' array
 */

// Complete the code to the function
function exercise14() {
    let ingresos = [100, 30, 10];
    let gastos = [40, 60, 60, 30];
    let total = 0;
    for (item in ingresos) {
        total += ingresos[item];
    };
    for (i in gastos) {
        total -= gastos[i];
    };
    return total;
}

module.exports = exercise14;
