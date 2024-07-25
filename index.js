const days = document.querySelector(".dd");
const months = document.querySelector(".MM");
const years = document.querySelector(".YY");

const svg = document.querySelector(".icon-svg");

const daysDisplay = document.querySelector(".days");
const monthsDisplay = document.querySelector(".months");
const yearsDisplay = document.querySelector(".years");

const dayDanger = document.querySelector(".dayDanger");
const monthDanger = document.querySelector(".monthDanger");
const yearDanger = document.querySelector(".yearDanger");

svg.addEventListener("click", () => {
  ageCalculator();
});

function dayCount(numbers) {
  const check = numbers.value.length;
  if (check > 2) {
    numbers.value = numbers.value.substring(0, 2);
    dayDanger.innerHTML = "Days cant only be two digit.";
    setTimeout(() => {
      dayDanger.innerHTML = "";
    }, 2000);
  }

  if (numbers.value > 31) {
    numbers.value = numbers.value.clear;
    dayDanger.innerHTML = "Days can't be more than 31..";
  }

  if (numbers.value === "") {
    setTimeout(() => {
      dayDanger.innerHTML = "";
    }, 2000);
  }
}

function monthCount(numbers) {
  const check = numbers.value.length;
  if (check > 2) {
    numbers.value = numbers.value.substring(0, 2);
    monthDanger.innerHTML = "Month can't be more than two digit.";
    setTimeout(() => {
      monthDanger.innerHTML = "";
    }, 2000);
  }

  if (numbers.value > 12) {
    numbers.value = numbers.value.clear;
    monthDanger.innerHTML = "Months can't be more than 13..";
  }

  if (numbers.value === "") {
    setTimeout(() => {
      monthDanger.innerHTML = "";
    }, 2000);
  }
}

function yearCount(numbers) {
  const check = numbers.value.length;
  if (check > 4) {
    numbers.value = numbers.value.substring(0, 4);
    yearDanger.innerHTML = "Years can't be more than 4 digit.";

    setTimeout(() => {
      yearDanger.innerHTML = "";
    }, 2000);

    if (numbers.value > 2024) {
      numbers.value = numbers.value.clear;
      yearDanger.innerHTML = "Years can't be more than 2024..";
    }

    if (numbers.value === "") {
      setTimeout(() => {
        yearDanger.innerHTML = "";
      }, 2000);
    }
  }
}
function inputChecker() {
  if (days.value === "") {
    dayDanger.innerHTML = "Fill this area please!";
    setTimeout(() => {
      dayDanger.innerHTML = "";
    }, 2000);
  }
  if (months.value === "") {
    monthDanger.innerHTML = "Fill this area please!";
    setTimeout(() => {
      monthDanger.innerHTML = "";
    }, 2000);
  }
  if (years.value === "") {
    yearDanger.innerHTML = "Fill this area please!";
    setTimeout(() => {
      yearDanger.innerHTML = "";
    }, 2000);
  }
}

function ageCalculator() {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  if (days.value === "" || months.value === "" || years.value === "") {
    inputChecker();
  } else {
    // ---------------------FOR DAYS-------------------

    const dayValue = days.value;
    if (day < dayValue) {
      daysDisplay.innerHTML = -(day - dayValue);
    } else {
      daysDisplay.innerHTML = day - dayValue;
    }

    // ----------------------FOR MONTHS-------------------
    const monthValue = months.value;
    if (month < monthValue) {
      monthsDisplay.innerHTML = -(month - monthValue);
    } else {
      monthsDisplay.innerHTML = month - monthValue;
    }

    // -------------------------FOR YEARS--------------------

    const yearValue = years.value;
    if (year < yearValue) {
      yearsDisplay.innerHTML = -(year - yearValue);
    } else {
      yearsDisplay.innerHTML = year - yearValue;
    }
  }
}
