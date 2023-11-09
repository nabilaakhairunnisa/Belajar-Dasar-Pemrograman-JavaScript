//Ya pokoknya mengecek apakah semua isi array sudah sesuai krikteria gitu
//Array Every menghasilkan nlai boolean

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

