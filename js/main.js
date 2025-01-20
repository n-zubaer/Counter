const count = document.querySelector(".counter");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

let counter = 0;

const newCounter = (value) => {

   counter = counter + value;
   count.innerHTML = counter;
   if (counter >= 15) {
      upBtn.setAttribute('disabled', true)
   }
   else {
      upBtn.removeAttribute('disabled', false)
   }

   //  decrease code 

   if (counter <= 0) {
      downBtn.setAttribute('disabled', true)
   }

   else {
      downBtn.removeAttribute('disabled', false)
   }
}

upBtn.addEventListener('click', () => {
   newCounter(1);
});

downBtn.addEventListener('click', () => {
   newCounter(-1);
})
