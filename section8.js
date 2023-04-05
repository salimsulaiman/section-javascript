document.getElementById("form").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const form = event.target;
    const formFields = form.elements;

    const fullNameInput = formFields.fullName;
    const emailInput = formFields[1];

    console.log(fullNameInput.value); // output: 'foo bar'
    console.log(emailInput.value); // output: 'foo@bar.com'
  },
  false
);
