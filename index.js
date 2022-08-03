let t = document.querySelector("#triangle");
let pyram = document.querySelector("#pyramid");
let reverse = document.querySelector("#reverseP");
let trinti = document.querySelector("#clear");

t.addEventListener("click", (event) => {
  const result = triangle(event.target.innerHTML);
  printOutput(result);
});

pyram.addEventListener("click", (event) => {
  const result = pyramid(event.target.innerHTML);
  printOutput(result);
});

reverse.addEventListener("click", (event) => {
  const result = reversePyramid(event.target.innerHTML);
  printOutput(result);
});

trinti.addEventListener("click", (event) => {
  const result = " ";
  printOutput(result);
});

function triangle() {
  let n = 5;
  let trik = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      trik += "*&nbsp";
    }
    trik += "<br>";
  }
  return trik;
  // document.write(trik);
}

function pyramid() {
  let n = 5;
  let pyr = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pyr += "&nbsp;";
    }
    for (let k = 0; k < i; k++) {
      pyr += "&nbsp;*&nbsp;";
    }
    pyr += "<br>";
  }
  return pyr;
  // document.write(pyr);
}

function reversePyramid() {
  let n = 5;
  let rever = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i + 1; j++) {
      rever += "&nbsp;";
    }
    for (let k = 1; k <= 2 * (n - i) + 1; k++) {
      rever += "&nbsp;*&nbsp;";
    }
    rever += "<br>";
  }
  return rever;
  // document.write(rever);
}

function printOutput(content) {
  document.querySelector("#display").innerHTML = content;
}
