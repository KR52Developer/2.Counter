const counter = document.querySelector(".counter");
const incrementBtn = document.querySelector(".incrementBtn");
const resetBtn = document.querySelector(".resetBtn");
const decrementBtn = document.querySelector(".decrementBtn");


let countValue = 0;


// To Increase the Counter Count

incrementBtn.addEventListener("click", () => {
    countValue = countValue + 1;
    counter.innerHTML = countValue;
});

// To Reset the Counter Count

resetBtn.addEventListener("click", () => {
    countValue = 0;
    counter.innerHTML = countValue;
});

// To Decrease the Counter Count

decrementBtn.addEventListener("click", () => {
    countValue = countValue - 1;
    counter.innerHTML = countValue;
});