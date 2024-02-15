const form = document.querySelector('.form');
const random_number=parseInt(Math.random()*100+1);
let guessed=0;
let to_guess=10;
form.addEventListener('submit',function (abcd)
{
    abcd.preventDefault();
    const input=parseInt(document.querySelector('.guessField').value);
    
    const result = document.querySelector('.lowOrHi');
    const last_result=document.querySelector('.lastResult');
    const rem_guess=document.querySelector('.guesses');
    if(to_guess>0)
    {
        if(input==random_number)
        {
            guessed++;
            to_guess=0;
            last_result.innerHTML=`${to_guess}`;
            rem_guess.innerHTML=`${guessed}`;
            result.innerHTML=`You Guessed it Right. The number was ${random_number}`;
        }
        else
        {
            guessed++;
            to_guess--;
            last_result.innerHTML=`${to_guess}`;
            rem_guess.innerHTML=`${guessed}`;
            result.innerHTML=`You Guessed it Wrong.`;
        }
    }
    else
    {
        last_result.innerHTML=`${to_guess}`;
        rem_guess.innerHTML=`${guessed}`;
        result.innerHTML=`No Guesses Remaining. The number was ${random_number}`;
    }
}
);