// ------------ davalebebi ------------------

// var box = document.getElementById('box-1');

// // 1
// box.style.backgroundColor = 'rgb(0, 0, 255)';

// // 2
// box.innerText = "this is a blue div";

// // setTimeout(function() {
// //     box.innerHTML = "<p>this is a blue div 2</p>";
// // }, 4000);

// // 3
// box.style.color = "#fff"; 

// // 4
// box.style.width = "500px";
// box.style.height = "500px";

// // 5
// box.style.fontSize = "25px";





// --------------- addEventLister funqcia

// var button = document.getElementById('change-bg');
// var box = document.getElementById('box-1');


// function generateRGB() {
//     var r = Math.floor(Math.random() * 100);
//     var g = Math.floor(Math.random() * 100);
//     var b = Math.floor(Math.random() * 100);

//     return "rgb("+r+", "+g+", "+b+")";
// }


// button.addEventListener("click", function(){
//     box.style.backgroundColor = generateRGB();
// });


// var button_text = document.getElementById('change-text');
// button_text.addEventListener("click", function() {
//     box.style.color = generateRGB();
// });



// --------------- getElementsByClassName funqcia

function generateRGB() {
    var r = Math.floor(Math.random() * 100);
    var g = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 100);

    return "rgb("+r+", "+g+", "+b+")";
}


var button = document.getElementById('change-bg');

var boxes = document.getElementsByClassName('box');

button.addEventListener('click', function() {
    var bg_color = generateRGB();

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = bg_color;
    }
    
});

// addEventListener
// getElementsByClassName
// Math -> floot - random



