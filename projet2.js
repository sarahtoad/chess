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

    const moveX = deltaX / distance * 110;
    const moveY = deltaY / distance * 110;

    noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

setTimeout(function(){
    cryingSticker.classList.remove('hidden');
    areusureMessage.classList.remove('hidden');
},5000);

setTimeout(function(){
    areusureMessage.classList.add('hidden');
    canchangeMessage.classList.remove('hidden');
},7000);

setTimeout(function(){
    canchangeMessage.classList.add('hidden');
    dontbeshyMessage.classList.remove('hidden');
},9000);

setTimeout(function(){
    dontbeshyMessage.classList.add('hidden');
    pleaseMessage.classList.remove('hidden');
},11000);

setTimeout(function(){
    pleaseMessage.classList.add('hidden');
    pleeeeeaseMessage.classList.remove('hidden');
},13000);

setTimeout(function(){
    pleeeeeaseMessage.classList.add('hidden');
    opertunityMessage.classList.remove('hidden');
},15000);

setTimeout(function(){
    opertunityMessage.classList.add('hidden');
    hateMessage.classList.remove('hidden');
},17000);

setTimeout(function(){
    hateMessage.classList.add('hidden');
});

yesButton.addEventListener('click',function(){
    hateMessage.classList.add('hidden')
    opertunityMessage.classList.add('hidden');
    pleeeeeaseMessage.classList.add('hidden');
    pleaseMessage.classList.add('hidden');
    areusureMessage.classList.add('hidden');
    canchangeMessage.classList.add('hidden');
    dontbeshyMessage.classList.add('hidden');
    cryingSticker.classList.add('hidden');

    happySticker.classList.remove('hidden');
    thanksMessage.classList.remove('hidden');

    setTimeout(function(){
        happySticker.classList.add('hidden');
        thanksMessage.classList.add('hidden');
    },50000);
});