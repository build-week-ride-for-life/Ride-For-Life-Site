const submitButton = document.querySelector('.sign-up-form button');
const input = document.querySelector('.input');
let inputArray = Array.from(input);
const checkbox = document.getElementById('checkbox');

// Submit button shadow disappears on mousedown
submitButton.addEventListener(
  'mousedown',
  e => (submitButton.style.boxShadow = 'none')
);

submitButton.addEventListener(
  'mouseup',
  e => (submitButton.style.boxShadow = '5px 5px 3px grey')
);

// Submit button turns red if checkbox unchecked or input fields empty, otherwise the text of the submit button changes to "success!"
submitButton.addEventListener('click', buttonHandler);

function buttonHandler(e) {
  e.preventDefault();
  if (!checkbox.checked || !checkInputFields) {
    submitButton.style.backgroundColor = 'crimson';
  } else if (checkbox.checked && checkForFilledInputFields) {
    submitButton.style.backgroundColor = '@navy';
    submitButton.textContent = 'Thank you!';
  }
}

// returns true if at least one input fields are empty
const checkForEmptyInputFields = inputArray.some(function(element) {
  return element.value === '';
});

// returns true if all input fields are filled
let checkForFilledInputFields = inputArray.every(function(element) {
  return element.value.length > 0;
});
