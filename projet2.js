const noButton =document.getElementById('noButton');
 const yesButton = document.getElementById('yesButton');
 const cryingSticker = document.getElementById('cryingSticker');
 const happySticker = document.getElementById('happySticker');
 const thanksMessage = document.getElementById('thanksMessage');
 const areusureMessage = document.getElementById('areusureMessage');
 const canchangeMessage = document.getElementById('canchangeMessage');
 const dontbeshyMessage = document.getElementById('dontbeshyMessage');
 const pleaseMessage = document.getElementById('pleaseMessage');
 const pleeeeeaseMessage = document.getElementById('pleeeeeaseMessage');
 const opertunityMessage = document.getElementById('opertunityMessage');
 const hateMessage = document.getElementById('hateMessage');
 const container = document.querySelector('.container');

document.addEventListener('mousemove',function(e){
    const x = e.clientX;
    const y = e.clientY;

    const buttonRect = noButton.getBoundingClientRect();
    const buttonX = buttonRect.left+buttonRect.width / 2;
    const buttonY = buttonRect.top+buttonRect.height / 2;
    
    const deltaX = buttonX - x;
    const deltaY = buttonY - y;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const moveX = deltaX / distance * 50;
    const moveY = deltaY / distance * 40;

    noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
});



yesButton.addEventListener('click',function(){
    yesButtonClicked = true;
    happySticker.classList.remove('hidden');
    thanksMessage.classList.remove('hidden');

    cryingSticker.classList.add('hidden');
    areusureMessage.classList.add('hidden');
   

    setTimeout(function(){
        happySticker.classList.add('hidden');
        thanksMessage.classList.add('hidden');
    },50000);
});

noButton.addEventListener('click', function() {
    happySticker.classList.add('hidden');
    thanksMessage.classList.add('hidden');

    setTimeout(function(){
        cryingSticker.classList.remove('hidden');
        areusureMessage.classList.remove('hidden');
    });
    
   
});
