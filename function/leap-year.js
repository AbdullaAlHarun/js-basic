function isLeapYear (year){
    if(year % 4 == 0){
        return true; 
    } else {
        return false;
    }
}

const isLipi = isLeapYear(2052);
console.log(isLipi);

// je bochor gulo 100 diye vag jayna but 4 diye bag jay sei bochor gulo leap year

function isLeapYear2(year){
    if(year % 100 !==0 && year % 4 === 0){
        return true;
    }else {
        return false;
    }
}
const isLeap = isLeapYear2(2100);
const isLeap3 = isLeapYear2(2400);
const isLeap4 = isLeapYear2(2529);