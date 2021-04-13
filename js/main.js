const calcAddition = document.querySelector('.calculator__addition')
const minusNum = document.querySelector('.minus')
const plusNum = document.querySelector('.plus')
const result = document.querySelector('.result')
let num = 0
//steps-section
const round = document.querySelector('.wrapper-steps')
const stepsItem = document.querySelectorAll('.steps__item')
const stepsRound = document.querySelector('.steps__round')
const stepsContainer = document.querySelector('.steps__container')

const stepsItem1 = document.getElementById('one')
const stepsItem2 = document.getElementById('two')
const stepsItem3 = document.getElementById('three')

//review-section

const slider = document.querySelector('.reviews__slider')
const slide = document.querySelectorAll('.reviews__slides')
const slidePrev = document.querySelector('.reviews__slides--left')
const slideNext = document.querySelector('.reviews__slides--right')


//Functions 
//calc-section
const detractNum = () => {
    result.innerText = num--
}

const summNum = () => {
    result.innerText = num++
}
//steps-section


//reviews-section





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

round.addEventListener('click', e => {
  if ( e.target.classList.contains('round1') ) {
      stepsItem1.style.display = "grid"
      stepsItem2.style.display = "none"
      stepsItem3.style.display = "none"
  } else if (e.target.classList.contains('round2') ) {
      stepsItem1.style.display = "none"
      stepsItem2.style.display = "grid"
      stepsItem3.style.display = "none"
  } else if (e.target.classList.contains('round3') ) {
      stepsItem1.style.display = "none"
      stepsItem2.style.display = "none"
      stepsItem3.style.display = "grid"
  } else if (e.target.classList.contains('round4') ) {
      stepsItem2.style.display = "none"
      stepsItem3.style.display = "none"
    }
  
})

  stepsItem1.style.display = "none"
  stepsItem2.style.display = "none"
  stepsItem3.style.display = "none"
// const compareSteps = e => {



//    if (e.target.classList.contains('round1')) {
//     stepsItem1.style.display = "grid"
//    } 


// }
// compareSteps()
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlide() {
//   showSlides(slideIndex += 1);
// }

// function minusSlide() {
//   showSlides(slideIndex -= 1);  
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   if (n > stepsItem.length) {
//   slideIndex = 1
//   }
//   if (n < 1) {
//   slideIndex = stepsItem.length
//   }
//   for (i = 0; i < stepsItem.length; i++) {
//     stepsItem[i].style.display = "none";
//   }
// //   for (i = 0; i < dots.length; i++) {
// //   dots[i].className = dots[i].className.replace("dots-action", "");
// //   }
//   stepsItem[slideIndex - 1].style.display = "grid";
// //   dots[slideIndex - 1].className += " dots-action";
// }
// round.addEventListener('click', plusSlide)