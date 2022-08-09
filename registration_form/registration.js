

var submit = document.getElementById('submit')
var inputs = Array.prototype.slice.call(document.querySelectorAll('.input'))

function findIfNotEmpty(input) {
  if (input.trim().length != 0) return true;
}

function validate(){
  inputs.forEach(input => { 
  inputvalue = input.querySelector('input').value
  if( findIfNotEmpty(inputvalue))
  input.querySelector('p').style.display = "none"
  else
  input.querySelector('p').style.display = "block"
});
}
submit.addEventListener('click',validate)

