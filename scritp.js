const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const emailAddress = document.getElementById("email");
const passwordValue = document.getElementById("password");


form.addEventListener("submit", e => {
  e.preventDefault();

  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailAddress = email.value.trim();
  var passwordValue = password.value.trim();
  var validoEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (firstName === '') {
    errorFunc(fname, 'First Name cannot be empty');
  } else {
    successFunc(fname);
  }

  if (lastName === '') {
    errorFunc(lname, 'Last Name cannot be empty');
  } else {
    successFunc(lname);
  }

  if (emailAddress === '') {
    errorFunc(email, 'Looks like this is not an email');
  }else if(emailAddress.match(validoEmail)){
        errorFunc(email, 'Looks like this is not an email')
  }
   else {
    successFunc(email);
  }

  if (passwordValue === '') {
    errorFunc(password, 'Password cannot be empty');
  } else {
    successFunc(password);
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector('span');
  span.innerText = message;
  req.className += 'error';
  span.className += 'error-text';
  if(req !== email){
     req.value = ' ';
  }else{
    req.style.color = "hsl(0, 100%, 74%)"
  }
}

function successFunc(req){
    req.className += 'success';
  }

