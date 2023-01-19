'strict';

let timer = 0;
let seconds = 60;
function currentTime() {
  var date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  hh = updateTime(hh);
  mm = updateTime(mm);
  ss = updateTime(ss);

  //`` causes responsive problems
  document.getElementById("clock").innerText = hh + " : " + mm + " : " + ss;

  timer += 1;
  console.log(timer);
  if (timer === seconds) {
    runCode();
    timer = -20;
  }
  setTimeout(function () { currentTime() }, 1000);
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();


let counter = 0;
let number = 0;
function runCode() {
  let add = setInterval(function () {
    number += 1;
    counter += 1;
    changeStyle()
    if (counter === 2) {
      changeStyleBack();
      counter = 0;
    }
    if (number === 40) {
      clearInterval(add);
      changeStyleBack();
      number = 0;
      console.log('Interval Cleared');
    }
  }, 500)
}

function changeStyle() {
  document.querySelector('#clock').style.boxShadow = '10px 10px 20px 5px rgb(255, 255, 255, 0.1), -10px -10px 20px 1px rgb(0, 0, 0, 0.05)';
  document.querySelector('#clock').style.transform = 'scale(0.95)';
}
function changeStyleBack() {
  document.querySelector('#clock').style.boxShadow = '-10px -10px 20px 5px rgb(255, 255, 255, 0.1), 10px 10px 20px 1px rgb(0, 0, 0, 0.05)';
  document.querySelector('#clock').style.transform = 'scale(1)';
}


const timerBtn1 = document.querySelector('.one');
const timerBtn5 = document.querySelector('.five');
const timerBtn10 = document.querySelector('.ten');
const timerBtn20 = document.querySelector('.twenty');

//Event handlers for all buttons
timerBtn1.addEventListener('click', function () {
  seconds = 60;
  timerBtn1.classList.add('buttonClicked');
  if (timerBtn5.classList.contains('buttonClicked') || timerBtn10.classList.contains('buttonClicked') || timerBtn20.classList.contains('buttonClicked')) {
    timerBtn5.classList.remove('buttonClicked');
    timerBtn10.classList.remove('buttonClicked');
    timerBtn20.classList.remove('buttonClicked');
  }
})
timerBtn5.addEventListener('click', function () {
  seconds = 300;
  timerBtn5.classList.add('buttonClicked');
  if (timerBtn1.classList.contains('buttonClicked') || timerBtn10.classList.contains('buttonClicked') || timerBtn20.classList.contains('buttonClicked')) {
    timerBtn1.classList.remove('buttonClicked');
    timerBtn10.classList.remove('buttonClicked');
    timerBtn20.classList.remove('buttonClicked');
  }
})
timerBtn10.addEventListener('click', function () {
  seconds = 600;
  timerBtn10.classList.add('buttonClicked');
  if (timerBtn10.classList.contains('buttonClicked') || timerBtn10.classList.contains('buttonClicked') || timerBtn20.classList.contains('buttonClicked')) {
    timerBtn5.classList.remove('buttonClicked');
    timerBtn1.classList.remove('buttonClicked');
    timerBtn20.classList.remove('buttonClicked');
  }
})
timerBtn20.addEventListener('click', function () {
  seconds = 1200;
  timerBtn20.classList.add('buttonClicked');
  if (timerBtn20.classList.contains('buttonClicked') || timerBtn10.classList.contains('buttonClicked') || timerBtn20.classList.contains('buttonClicked')) {
    timerBtn5.classList.remove('buttonClicked');
    timerBtn10.classList.remove('buttonClicked');
    timerBtn1.classList.remove('buttonClicked');
  }
})