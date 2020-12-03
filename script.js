// 1.
// var student = {
//     name: "",
//     lastname: "",
//     course: "",

//     getData: function() {
//         console.log( this.name + " " + this.lastname + " " + this.course ); // this == student
//     }    
// };

// student.name = "David";
// student.lastname = "Menabde";
// student.course = 2;
// student.getData();

// 2.
// var car = {
//     model: "Toyota",
//     year: 2020,

//     getModel: function() {
//         console.log( this.model );
//     }
// }

// car.getModel();



// getElementById
// innerText
// innerHTML
// style


var box1 = document.getElementById("box-1");
box1.style.color = "red";


var box2 = document.getElementById("box-2");
box2.innerHTML = "<span>hello</span>";


box2.style.backgroundColor = "green";
box2.style.width = "200px";
box2.style.height = "200px";