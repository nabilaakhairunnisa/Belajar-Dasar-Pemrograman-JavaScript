//...Kuis Logika If
function scoreChecker(score) {
    let result;
 } 
let score = 90;   
if (score >= 90){
        result = 'Selamat! Anda mendapatkan nilai A.';
    }
    else if (score >= 80){
        result = 'Anda mendapatkan nilai B.';
    }
    else if (score >= 70){
        result = 'Anda mendapatkan nilai C.';
    }
    else if (score >= 60){
        result = 'Anda mendapatkan nilai D.';
    }
    else if (score < 60){
        result = 'Anda mendapatkan nilai E.';
    }

    console.log(result);