const form = document.querySelector('form');
form.addEventListener('submit',function (abcd)
{
   abcd.preventDefault();
   let height = parseInt(document.querySelector('#height').value);
   let weight = parseInt(document.querySelector('#weight').value);
   let bmi = (weight/((height*height)/10000)).toFixed(2);
   const results = document.querySelector('#results') 
   if(height==='' || height<0 || isNaN(height))
   {
    results.innerHTML=`Please Give a Valid Height`;
   }
   else if(weight==='' || weight<0 || isNaN(weight))
   {
    results.innerHTML=`Please Give a Valid Weight`;
   }
   else{
   results.innerHTML=`<h6>Your BMI is ${bmi}</h6>`;
   }
});