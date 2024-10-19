const day = document.getElementById("dayinp");
const month = document.getElementById("mnthinp");
const year = document.getElementById("yerinp");
// ****************************************
const btn = document.getElementById("submit");
const spanName = document.querySelectorAll(".spanName");
const inputs = document.querySelectorAll("input");
const small = document.querySelectorAll(".small");
const errorDay = document.querySelector(".errorday");
const form = document.forms[0];
let outputs = document.querySelectorAll(".outputs span");

// ####
let valid ;
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// #####
form.addEventListener("submit",function (e) {

    e.preventDefault();
    if(day.value == "" && month.value == "" && year.value == "") {
        spanName.forEach((span) => {
            span.style.color = "hsl(0, 100%, 67%)";
            inputs.forEach((inp) => {
                inp.style.borderColor = "hsl(0, 100%, 67%)";
            })
        })
        small.forEach((s) => {
            s.textContent = "this field is required";
            s.style.visibility="visible"
        });
        valid = false;
        outputs.forEach((e) => {
            e.textContent = "--"
        })
        return;
    }
    
    // check if the in[puts is valid 
    checkCalidation()
});

function checkCalidation() {
    let arrOfSmall = [...small]
    let today = new Date();
    if (day.value > 31 || month.value > 12 || year.value > today.getUTCFullYear()) {
        valid = false;
        spanName.forEach((span) => {
            span.style.color = "hsl(0, 100%, 67%)";
            inputs.forEach((inp) => {
                inp.style.borderColor = "hsl(0, 100%, 67%)";
            })
        });
        if (day.value > 31 || day.value > daysInMonths[month.value - 1]) {
            arrOfSmall[0].textContent = "must be a valid day";
            arrOfSmall[0].style.visibility = "visible"
        }
        if (month.value > 12) {
            arrOfSmall[1].textContent = "must be a valid month";
            arrOfSmall[1].style.visibility = "visible"
        }
        if (year.value > today.getUTCFullYear()) {
            arrOfSmall[2].textContent = "must be in the past";
            arrOfSmall[2].style.visibility = "visible"
        }
        outputs.forEach((e) => {
            e.textContent = "--"
        })
        return;
    }
    valid = true;
    if (valid) {
        showDate()
    }
}

function showDate() {
    let date = `${month.value}/${day.value}/${year.value}`;
    let dayBirth = new Date(date);
    let diff = Date.now() - dayBirth;
    let ageDate = new Date(diff);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let agemonth = ageDate.getUTCMonth() ;
    let ageDay = ageDate.getUTCDay() - 1;
    
    let resDay = document.getElementById("dayotpt");
    let resMonth = document.getElementById("mnthotpt");
    let resYear = document.getElementById("yearsotpt");

    if (ageYear < 10) {
        resYear.innerHTML = `0${ageYear}`;
    }else {
        resYear.innerHTML = ageYear;
    };

    if (agemonth < 10) {
        resMonth.innerHTML = `0${agemonth}`;
    }else {
        resMonth.innerHTML = agemonth;
    };

    if (ageDay < 10) {
        resDay.innerHTML = `0${ageDay}`;
    }else {
        resDay.innerHTML = ageDay;
    };
    spanName.forEach((span) => {
        span.style.color = "hsl(0, 1%, 44%)";
        inputs.forEach((inp) => {
            inp.style.borderColor = "hsl(0, 0%, 86%)";
        })
    })
    small.forEach((s) => {
        s.style.visibility="hidden"
    });

}

