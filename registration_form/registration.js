

var submit = document.getElementById('submit')
var inputs = Array.prototype.slice.call(document.querySelectorAll('.input'))

function findIfNotEmpty(input) {
  if (input.trim().length != 0) return true;
}

function validate(){
  inputs.forEach(input => { 
  inputvalue = input.querySelector('input').value
  console.log(inputvalue)
  if( findIfNotEmpty(inputvalue))
  input.querySelector('p').style.visibility = "hidden"
  else
  input.querySelector('p').style.visibility = "visible"
});
}
submit.addEventListener('click',validate)

