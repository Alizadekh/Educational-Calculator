// Make Mobile Navbar events
const burgerMenu = document.querySelector(".burger-menu");
const menuContent = document.querySelector(".container");
const closeMenuBtn = document.getElementById("closeBtn");

const openMenu = function () {
  menuContent.style.transform = "translateX(0px)";
  burgerMenu.style.display = "none";
};
const closeMenu = () => {
  menuContent.style.transform = "translateX(-500px)";
  burgerMenu.style.display = "block";
};

burgerMenu.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

// Adding Lesson count

let input = document.querySelector(".number");
let addBtn = document.querySelector("#addButton");
let boxes = document.querySelector(".box-top");

addBtn.addEventListener("click", function () {
  let count = parseInt(input.value);
  for (let i = 0; i < count; i++) {
    boxes.innerHTML += `            
    <div class="box box-1">
              <div class="left">
                <p>Ümumi bal</p>
                <input class="examscore" type="text" />
              </div>
              <div class="right">
                <p>Kredit sayı</p>
                <input class="credits" type="text" />
              </div>
            </div>`;
  }
});

// Calculate Score

let calculateBtn = document.querySelector(".finish");

calculateBtn.addEventListener("click", function () {
  let score = document.querySelector(".score span");
  let examscore = document.querySelectorAll(".examscore");
  let credits = document.querySelectorAll(".credits");
  let scoreArr = [];
  let creditArr = [];
  examscore.forEach((element) => {
    scoreArr.push(parseInt(element.value));
  });
  credits.forEach((credit) => {
    creditArr.push(parseInt(credit.value));
  });
  console.log(scoreArr);
  console.log(creditArr);
  let creditSum = 0;
  let top = 0;
  for (let i = 0; i < scoreArr.length; i++) {
    for (let j = 0; j < creditArr.length; j++) {
      creditSum += creditArr[j];
      top += scoreArr[i] * creditArr[j];
    }
  }
  const finishVal = top / creditSum;
  score.innerText = finishVal;
});
