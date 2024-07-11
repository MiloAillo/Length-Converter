document.getElementById("inputValue").addEventListener('input', calculate);

document.getElementById("inputLength").addEventListener('input', calculate);

document.getElementById("outputLength").addEventListener('input', calculate);

function calculate() {

  let inputLength = document.getElementById("inputLength").value
  let outputLength = document.getElementById("outputLength").value
  let inputValue = document.getElementById("inputValue").value

  if (inputValue === "") {
    document.getElementById("inputValue").placeholder = "enter your value"
  }

  // centimeter input
  if (inputLength === "centimeter" && outputLength === "centimeter") {
    document.getElementById("outputValue").value = inputValue;
  } // centimeter to centimeter

  else if (inputLength === "centimeter" && outputLength === "meter") {
    document.getElementById("outputValue").value = inputValue / 100;
  } // centimeter to meter

  else if (inputLength === "centimeter" && outputLength === "kilometer") {
    document.getElementById("outputValue").value = inputValue / 100000; // centimeter to kilometer
  }

  // Meter input
  else if (inputLength === "meter" && outputLength === "centimeter") {
    document.getElementById("outputValue").value = inputValue * 100;
  } // meter to centimeter

  else if (inputLength === "meter" && outputLength === "meter") {
    document.getElementById("outputValue").value = inputValue;
  } // meter to meter

  else if (inputLength === "meter" && outputLength === "kilometer") {
    document.getElementById("outputValue").value = inputValue / 1000; // meter to kilometer
  }

  // Kilometer input
  else if (inputLength === "kilometer" && outputLength === "centimeter") {
    document.getElementById("outputValue").value = inputValue * 100000;
  } // kilometer to centimeter

  else if (inputLength === "kilometer" && outputLength === "meter") {
    document.getElementById("outputValue").value = inputValue * 1000;
  } // kilometer to meter

  else if (inputLength === "kilometer" && outputLength === "kilometer") {
    document.getElementById("outputValue").value = inputValue;
  } // kilometer to kilometer
}