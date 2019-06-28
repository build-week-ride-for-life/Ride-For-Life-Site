

// Submit button shadow disappears on mousedown
const submitButton = document.querySelector('.sign-up-form button');
submitButton.addEventListener('mousedown', (e) => 
  submitButton.style.boxShadow = "none");

submitButton.addEventListener('mouseup', (e) => 
  submitButton.style.boxShadow = "5px 5px 3px grey");

submitButton.addEventListener('click', (e) => e.preventDefault());

let checkbox = document.getElementById('checkbox');
if(checkbox.checked === false || input.value === "") {
  submitButton.onclick = function disabledSubmit() {
    submitButton.style.backgroundColor = "crimson";
    document.querySelector('.terms').style.border = "2px solid red";
  }
}
  else {
    submitButton.onclick = function submit(){
      submitButton.textContent = "success!";
    }
  }


//  submit button if checkbox not checked & turn button red on click


