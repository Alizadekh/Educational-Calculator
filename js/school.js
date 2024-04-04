// Adding KSQ count
let countBtn = document.querySelector("#countInput");
let addBtn = document.querySelector("#addButton");
let boxes = document.querySelector(".box-top");

addBtn.addEventListener("click", function () {
  let count = parseInt(countBtn.value);
  if (isNaN(countBtn.value || count > 8)) {
    alert("Maksimum say 8 ola bilər! Yalnız rəqəm daxil edilə bilər!");
    countBtn.value = " ";
  } else {
    for (let i = 0; i < count; i++) {
      boxes.innerHTML += `           
   <div class="box box-1">
        <p>KSQ</p>
        <input type="text" class="inputData"/>
    </div>`;
    }
  }
});

// Calculate Score

let calculate = document.querySelector(".finish");
let score = document.querySelector(".score span");

calculate.addEventListener("click", function () {
  let bsqVal = document.querySelector(".box-end input");
  let data = document.querySelectorAll(".inputData");
  let arr = [];
  let sum = 0;
  data.forEach((element) => {
    arr.push(parseInt(element.value));
  });
  for (let i of arr) {
    sum += i;
  }
  let finishVal = parseInt(bsqVal.value) * 0.6 + (sum / arr.length) * 0.4;
  score.textContent = finishVal;
  // console.log(arr);
  // console.log(sum);
  // console.log(finishVal);
});
