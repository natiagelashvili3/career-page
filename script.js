var burger = document.getElementById('burger');
var header = document.getElementById('header');

burger.addEventListener('click', function() {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        burger.classList.remove('open');
    } else {
        header.classList.add('open');
        burger.classList.add('open');
    }
});

// var popup = document.getElementById('popup');

// document.getElementById('popup-btn').addEventListener('click', function() {
//     popup.classList.add('active');
// });

// document.getElementById('popup-close').addEventListener('click', function() {
//     popup.classList.remove('active');
// });

// var popup1 = document.getElementById('popup-1');

// document.getElementById('popup-btn-1').addEventListener('click', function() {
//     popup1.classList.add('active');
// });

// var div = document.getElementById('test');

// console.log( div.setAttribute('data-id', '66') );




var btns = document.getElementsByClassName('popup-btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var popupId = this.getAttribute('data-popup-id');
        document.getElementById(popupId).classList.add('active');
    });
}


var btnsClose = document.getElementsByClassName('popup-close');

for(let i=0; i< btnsClose.length; i++) {
    btnsClose[i].addEventListener('click', function() {
        this.parentNode.parentNode.parentNode.classList.remove('active');
    });
}