// Your code goes here
let navLink = document.querySelectorAll('.nav-link');
let navs = document.querySelector('.nav')
let wholeBody = document.querySelector('body');
let textCont = document.querySelectorAll('.text-content');
const imgCont = document.querySelectorAll('.image-content');
let conDest = document.querySelector('.content-destination');
let btnz = document.querySelector('.btn');
navLink.forEach(element => {
    element.addEventListener('mouseover', event => {
        element.style.color = 'blue';
    }),
    element.addEventListener('mouseleave', event=>{
        element.style.color = 'red';
    })

});
navs.addEventListener('click', function(event){
    event.preventDefault();
})
btnz.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
    event.stopPropagation();
  })

wholeBody.addEventListener('keydown', function(event){
    wholeBody.style.backgroundColor = '#C53151';
});

textCont.forEach(element => {
element.addEventListener('click', event => {
    element.style.color = 'purple';
    element.style.backgroundColor='black';
    });
});

conDest.addEventListener('contextmenu', event => {
        conDest.style.color = 'magenta';
        conDest.style.backgroundColor='cyan';
});

document.addEventListener('wheel', function(event){
    alert('FOR THE LOVE OF ALL THINGS HOLY CLICK OK!');
    
});

document.addEventListener('keydown', function(event){
    alert('You have pressed a key, press any key to get out of this');
});



window.addEventListener("load", function(event) {
    alert('Welcome to the not so Fun Bus');
    });

window.addEventListener('resize', (event) => {
    const textCont = document.querySelector('.text-content');
    textCont.textContent = 'My name is Emily!';
    textCont.style.fontSize = '5rem';
});


wholeBody.addEventListener('dblclick', function (event){
    wholeBody.style.backgroundColor = "yellow";
    
});