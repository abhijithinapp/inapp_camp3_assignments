string = ""
console.log('hi')
var keys = Array.prototype.slice.call(document.querySelectorAll('.keys'))
var display = document.getElementById('display')
var reset = document.getElementById('reset')
var evaluate = document.getElementById('evaluate')

console.log(keys);
keys.forEach(key=> { key.addEventListener("click",(event)=> {
   string+=key.innerHTML
   display.innerHTML = string 
});});
var key = document.querySelectorAll('#display')

reset.addEventListener("click", ()=> {
   string = ""
   display.innerHTML = string})

evaluate.addEventListener('click',()=> {
   try{
      output = eval(string)
      display.innerHTML = output   
   }
   catch{
      display.innerHTML = "Syntax Error"  
   }
   string = ""
})