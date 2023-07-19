

let counterValue = 0;

const [decrementBtn, valueEl, incrementBtn] = document.querySelector("#counter").children;
 
decrementBtn.addEventListener("click", () => {
    counterValue--;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue++;
    valueEl.textContent = counterValue;
});

console.log(valueEl);
