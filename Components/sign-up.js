const submitButton = document.querySelector('.sign-up-form button');
const input = document.querySelectorAll('.input');
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

// Submit button prevent default behavior
submitButton.addEventListener('click', buttonHandler);

function buttonHandler(e) {
  e.preventDefault();
  if (!checkbox.checked) {
    submitButton.style.backgroundColor = 'crimson';
    document.querySelector('.terms').style.border = '2px solid red';
  } else if (checkbox.checked) {
    submitButton.style.backgroundColor = '@navy';
    submitButton.textContent = 'Thank you!';
    document.querySelector('.terms').style.border = 'none';
  }
}

// Submit button turns red if checkbox unchecked or input fields empty, otherwise the text of the submit button changes to "success!"

// || input.value === ''
// && input.value.length > 0
