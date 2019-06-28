

// Submit button shadow disappears on mousedown
const submitButton = document.querySelector('.sign-up-form button');
submitButton.addEventListener('mousedown', (e) => 
  submitButton.style.boxShadow = "none");

submitButton.addEventListener('mouseup', (e) => 
  submitButton.style.boxShadow = "5px 5px 3px grey");

submitButton.addEventListener('click', (e) => e.preventDefault());

// Disable submit button if checkbox not checked

const checkbox = document.querySelector('#checkbox');
// if(checkbox.checked === false) {
//   shake();
// }

// function shake() {
//   submitButton.disabled = true;
//   submitButton.addEventListener('click', () => submitButton.classList.add("apply-shake"));
//   input.addEventListener("animationend", (e) => {
//   input.classList.remove("apply-shake");
//   });
// }

// checkbox.onchange = function(){
//   if(this.checked){
//     submitButton.disabled = false;
//   } else {
//     submitButton.disabled = true;  
//     disabledNotice()
//     }
//   }

//   function disabledNotice() {
//     submitButton.addEventListener('click', () => submitButton.style.background = "red");

//   }
