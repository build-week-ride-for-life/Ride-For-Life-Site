// Submit button prevent default behavior
submitButton.addEventListener('click', e => e.preventDefault());

// Submit button shadow disappears on mousedown
const submitButton = document.querySelector('.sign-up-form button');
submitButton.addEventListener(
  'mousedown',
  e => (submitButton.style.boxShadow = 'none')
);

submitButton.addEventListener(
  'mouseup',
  e => (submitButton.style.boxShadow = '5px 5px 3px grey')
);

// Submit button turns red if checkbox unchecked or input fields empty, otherwise the text of the submit button changes to "success!"
let checkbox = document.getElementById('checkbox');

if (checkbox.checked === false || input.value === '') {
  submitButton.onclick = function disabledSubmit() {
    submitButton.style.backgroundColor = 'crimson';
    document.querySelector('.terms').style.border = '2px solid red';
  };
} else if (checkbox.checked === true && input.value.length > 0) {
  submitButton.onclick = function submit(e) {
    submitButton.style.backgroundColor = '@navy';
    submitButton.textContent = 'success!';
    e.preventDefault();
  };
}
