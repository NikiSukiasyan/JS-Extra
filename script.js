// // = მნიშვნელობის მინიჭება, == ადარებს მხოლოდ მნიშვნელობებს, === ადარებს როგორც ტიპს ასევე მნიშვნელობებს

// const btn = document.getElementById("btn");
// const input = document.getElementById("input");

// let text = document.getElementById("paragraph");
// text.style.display = "none";

// btn.addEventListener("click", () => {
//   if (input.value.length === 0) {
//     text.style.display = "block";
//     text.style.color = "red";
//   } else if (input.value.length < 5) {
//     text.textContent = "5 ზე მეტი გვინდა";
//     text.style.display = "block";
//     text.style.color = "red";
//   } else {
//     alert("გილოცავ");
//     text.style.display = "none";
//     input.value = "";
//   }
// });

// input.addEventListener("input", (event) => {
//   console.log("Input value --->", event.target.value);
// });

// const PlusButton = document.createElement("button");
// const MinusButton = document.createElement("button");
// let number = document.createElement("p");

// number.textContent = 0;
// PlusButton.textContent = "+";
// MinusButton.textContent = "-";

// document.body.appendChild(PlusButton);
// document.body.appendChild(MinusButton);
// document.body.appendChild(number);

// const newDiv = document.createElement("div");

// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.backgroundColor = "red";

// document.body.appendChild(newDiv);

// newDiv.addEventListener("mouseenter", () => {
//   newDiv.style.backgroundColor = "blue";
// });

// newDiv.addEventListener("mouseleave", () => {
//   newDiv.style.backgroundColor = "red";
// });

// 5 =  1 * 2 * 3 * 4 * 5 = 120

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return factorial(num - 1) * num;
//   }
// }

// console.log(factorial(5));

// const plusButton = document.createElement("button");
// const minusButton = document.createElement("button");
// const number = document.createElement("p");

// number.textContent = 0;
// plusButton.textContent = "+";
// minusButton.textContent = "-";

// document.body.appendChild(number);
// document.body.appendChild(plusButton);
// document.body.appendChild(minusButton);

// console.log(typeof number.textContent);

// plusButton.addEventListener("click", () => {
//   number.textContent++;
// });

// minusButton.addEventListener("click", () => {
//   if (+number.textContent === 0) {
//     alert("gveyo");
//   } else {
//     number.textContent--;
//   }
// });

// const btn = document.getElementById("btn");
// const input = document.getElementById("input");
// const paragraph = document.getElementById("paragraph");

// paragraph.style.display = "none";

// btn.addEventListener("click", () => {
//   if (input.value.length === 0) {
//     paragraph.textContent = "required";
//     paragraph.style.color = "red";
//     paragraph.style.display = "block";
//   } else if (input.value.length < 5) {
//     paragraph.textContent = "5 ზე მეტი";
//     paragraph.style.color = "red";
//     paragraph.style.display = "block";
//   } else {
//     alert("გილოცავთ");
//     input.value = "";
//   }
// });

// function timer() {
//   let number = 10;

//   setInterval(() => {
//     if (number === 0) {
//       clearInterval();
//     } else {
//       console.log(number);
//       number--;
//     }
//   }, 1000);
// }

// timer();

// const newDiv = document.createElement("div");
// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.backgroundColor = "red";
// let isRed = true;

// document.body.appendChild(newDiv);

// newDiv.addEventListener("click", () => {
//   if (isRed === true) {
//     newDiv.style.backgroundColor = "red";
//   } else {
//     newDiv.style.backgroundColor = "blue";
//   }

//   isRed = !isRed;
// });
