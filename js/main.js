const calcAddition = document.querySelector('.calculator__addition')
const minusNum = document.querySelector('.minus')
const plusNum = document.querySelector('.plus')
const result = document.querySelector('.result')
let num = 0
//steps-section
const round = document.querySelector('.wrapper-steps')
const stepsItem = document.querySelectorAll('.steps__item')
const stepsRound = document.querySelector('.steps__round')



//Functions 
//calc-section
const detractNum = () => {
    result.innerText = num--
}

const summNum = () => {
    result.innerText = num++
}
//steps-section



//Event Listeners
//calc-section
plusNum.addEventListener('click', summNum)
minusNum.addEventListener('click', detractNum)
//steps-section

round.addEventListener('click', e => {
    if(
        e.target.classList.contains('steps__round') 
        
    ) {
        e.target.classList.toggle('steps__round--active') 
    }
    
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > stepsItem.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = stepsItem.length
  }
  for (i = 0; i < stepsItem.length; i++) {
    stepsItem[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace("dots-action", "");
//   }
  stepsItem[slideIndex - 1].style.display = "grid";
//   dots[slideIndex - 1].className += " dots-action";
}
round.addEventListener('click', plusSlide)