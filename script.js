// amocana 4
// var lastname = "gelashvili";
// var result = lastname.split("").join("*");
// console.log(result);

// amocana 5
//var arr = [2, 4, 6, 8, 10, 12, 14];
//[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
// var first = arr.shift();
// var last = arr.pop();
// arr.push(first);
// arr.unshift(last);
//console.log(arr);

// amocana 6
// var str = "world";  // -> dlrow
// var result = '';

// for (let i = 1; i <= str.length; i++) {
//     result += str[ str.length - i ];
// }

// console.log(result);

// amocana 7
// var str = "world";
// var str1 = "Hello";
// var str2 = "Hello World";  //ello Worl
// var str3 = "Hello World, How are you";


// function slice_string(str) {
//     console.log( str.slice(1, str.length - 1) );
// }

// slice_string(str);
// slice_string(str1);
// slice_string(str2);
// slice_string(str3);

// amocana 8
// var str = "Hello my   world";
// var splited = str.split(" ");
// var result = "";

// for (let i = 0; i < splited.length; i++) {
//     if(splited[i] != "") {
//         result += splited[i];
//     }
// }

// console.log(result);






// amocana 9-1
// function getString(name, lastaname, age) {
//     console.log( name + " " + lastaname + " " + age );
// }

// getString("Mariam", "Menabde", 18);



// amocana 9-2
// var age = prompt("Enter Your Age:");

// if(age < 18) {
//     console.log("Under 18");
// } else {
//     console.log("Over 18");
// }

// amocana 9-3

// function generateEvens(x){
//     for (let i = 0; i < 3; i++) {
//         console.log(x);
        
//     }
// }

// function generateOdds(x){
//     console.log(x);
// }

// var number = prompt("Enter number: ");
// if (number) {
//     if (number%2 == 0) {
//         generateEvens(number);
//     } else {
//         generateOdds(number);
//     }
// }





var person = { 
    name: null, 
    lastname: null,

    getName: function() {
        console.log( this.name );
    },

    setName: function(name) {
        this.name = name;
    },

    getLastaname: function() {
        console.log( this.lastname );
    },

    setLastname: function(lastname) {
        this.lastname = lastname;
    },
};

person.setName("Mariam");
person.getName();

person.setLastname("Menabde");
person.getLastaname();