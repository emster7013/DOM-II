// Your code goes here
let navLink = document.querySelectorAll('.nav-link');
let textCont = document.querySelector('.text-content');
const allButtons = document.querySelectorAll('.btn');

navLink.forEach(element => {
    element.addEventListener('mouseover', event => {
        element.style.color = 'blue';
    }),
    element.addEventListener('mouseleave', event=>{
        element.style.color = 'red';
    })
    
});

textCont.addEventListener('click', function(){
    textCont.style.backgroundColor = 'black';
    textCont.style.color = 'purple';
})

document.addEventListener('wheel', function(event){
    alert('FOR THE LOVE OF ALL THINGS HOLY CLICK OK!');
    event.stopPropagation();
});

document.addEventListener('keydown', function(event){
    alert('You have pressed a key, press ok to get out);
});



window.addEventListener("load", function(event) {
    alert('Welcome to the not so Fun Bus');
    });

window.addEventListener('resize', (event) => {
    const textCont = document.querySelector('.text-content');
    textCont.textContent = 'My name is Emily!';
    textCont.style.fontSize = '4.5rem';
});

textCont.addEventListener('contextmenu', e => {
    e.preventDefault();
  });