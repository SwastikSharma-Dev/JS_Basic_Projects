const time = document.querySelector('#clock');
const intial_time = new Date();
time.innerHTML=intial_time.toLocaleTimeString();
setInterval(function()
{
let date = new Date();
time.innerHTML=date.toLocaleTimeString();
},1000);