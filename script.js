let numberContainer = document.getElementById("num");
let value = 0;
let btnInc = document.querySelector(".inc-value");
let btnDec = document.querySelector(".dec-value");
let btnReset = document.querySelector(".reset");

//increment function
btnInc.addEventListener("click", () => {
  value++;//
  ++value;
  numberContainer.value = value;
});

// decrement function
btnDec.addEventListener("click", () => {
  value--;
  numberContainer.value = value;
});
btnReset.addEventListener("click", () => {
  value = 0;
  numberContainer.value = value;
});

//  input number function
function getVal() {
  const val = document.querySelector("input").value;

  testNum = !/\D/.test(val);
  // console.log (testNum);
  // console.log(val);
  if (val === "") {
    // console.log("Please select");
    value = 0;
    // console.log(value);
    numberContainer.value = value;
  } else if (testNum == true) {
    value = val;
    console.log(value);
    numberContainer.value = value;
  } else if (testNum == false) {
    alert("Please enter a number");
    numberContainer.value = value;
  }
}

document.addEventListener("keydown", (event) => {
  numberkey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const key = event.key;
  let numberValue = numberContainer.value;
  // console.log(key);

  if (numberkey.includes(key)) {
    // console.log(key);
    if (numberValue === "0") {
      // console.log("first number")
      value = key;
      numberContainer.value = value;
    } else {
      value += key;
      numberContainer.value = value;
    }
  }
});
