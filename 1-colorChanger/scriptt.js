const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(abcd) {


abcd.addEventListener('click',function(xyz)
{
    // console.log(xyz);
    // console.log(xyz.target);
    // console.log(xyz.target.id);
    
        body.style.backgroundColor=xyz.target.id;
    
});
});