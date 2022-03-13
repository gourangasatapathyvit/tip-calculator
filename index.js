let calculate = document.querySelector(".calculate");
let resetButton = document.querySelector(".reset");
let tipdigit = document.querySelector("#tip_digit");

resetButton.addEventListener("click", () => {
  document.querySelector("#amount").value = "";
  tipdigit.innerHTML = 0;
});

calculate.addEventListener("click", () => {
  let totalAmount = document.querySelector("#amount").value;
  tipdigit.innerHTML = totalAmount * 0.02;
});
