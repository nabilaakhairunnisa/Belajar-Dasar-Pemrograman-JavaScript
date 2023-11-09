//Conditional Expressions menggunakan Ternary Operator
//Syntax: condition ? true expression : false expression

const isMember = true;
const discount = isMember ? 10 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount}%`)

function minimum (a, b) {
	if (a < b || a == b) {
		return a
	}
	else if (b < a) {
		return b
    }
}

let output = console.log (minimum (1, 2));