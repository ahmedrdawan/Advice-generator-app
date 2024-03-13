const advice = document.getElementById("advice");
const advice_api = document.getElementById("advice-api");
const image = document.querySelector(".card .image img");

image.onclick = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((myDate) => myDate.slip)
    .then((result) => {
      advice.innerHTML = `${result["id"]}`;
      advice_api.innerHTML = `"${result["advice"]}"`;
    });
};

//////////////////////////
// Three //
/////////////////////////

// image.onclick = function () {
//   fetch("https://api.adviceslip.com/advice")
//     .then((result) => result.json())
//     .then((myDate) => myDate.slip)
//     .then((result) => {
//       advice.innerHTML = `${result["id"]}`;
//       advice_api.innerHTML = `"${result["advice"]}"`;
//     });
// };

//////////////////////////
// Two //
/////////////////////////
// const getDate = function (addLink) {
//   return new Promise(function (resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText).slip);
//       } else {
//         reject(Error("Not Found Date"));
//       }
//     };
//     request.open("GET", addLink);
//     request.send();
//     console.log(request);
//   });
// };

// getDate("https://api.adviceslip.com/advice").then((result) => {
//   advice.innerHTML = `${result["id"]}`;
//   advice_api.innerHTML = `"${result["advice"]}"`;
// });

// setInterval(() => {
//   getDate("https://api.adviceslip.com/advice").then((result) => {
//     advice.innerHTML = `${result["id"]}`;
//     advice_api.innerHTML = `"${result["advice"]}"`;
//   });
// }, 5000);

//////////////////////////
// one //
/////////////////////////

// function fetchDate() {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://api.adviceslip.com/advice");
//   request.send();
//   console.log(request);

//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       // Get Id To Advice
//       const id_Advice = JSON.parse(this.responseText).slip["id"];
//       advice.innerHTML = `${id_Advice}`;

//       // Get Advice
//       const adviceFromObj = JSON.parse(this.responseText).slip["advice"];
//       advice_api.innerHTML = `"${adviceFromObj}"`;

//       console.log(JSON.parse(this.responseText).slip);
//     }
//   };
// }

// fetchDate();
// setInterval(fetchDate, 5000);
