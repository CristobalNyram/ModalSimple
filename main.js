//get modal element
var audio = new Audio ('grito.mp3');

var modal = document.getElementById('simpleModal');

var modalBtn=document.getElementById('modalBtn');

var closeBtn= document.getElementById('closeBtn');
// also we can use ByClassName

modalBtn.addEventListener("click",openModal);


//listen for close cli

closeBtn.addEventListener("click",closeModal);


//listen for outside click
window.addEventListener('click',clickOutside);



//function to close modal id outside click
function clickOutside(e)
{
if(e.target==modal)
{
    modal.style.display="none";
}
}


//function for close modal

function closeModal()
{
    modal.style.display="none";
}

//function open the moddal

function openModal()
{
    audio.play();
    modal.style.display='block';
}


