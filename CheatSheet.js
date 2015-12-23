// Using the Console without right clicking to Inspect
// Command + Option + J


// variable number

var price1 = 20;
var price2 = 40;
var totalprice = price1 + price2;

// variable string double quotes
var me = "Derrick Chou"

// variable string single quotes
var me1 = 'Derrick Chou'

// variable boolean true false logic

var DannyisSmart = false;
var DannyisDumb = true;


// Outputs
// console.log("This is Derrick's check in the console")
// alert("Derrick says hello in a pop alert")
// logging to html will form a message within the browser form

function crap() {
	document.getElementById("Boogers").innerHTML = "Oh click, I crapped my pants";
	console.log("CRAPPPPPP in the Console upon onclicking")
	alert("Alert CraP")
}


var democrat_array = ["Hilary", "Bernie"];
var republican_array = ["Trump", "Cruz", "Rubio", "Carson"] 
var candidate_array = [democrat_array,republican_array];
	alert(candidate_array[1][2]);
	console.log(candidate_array[1][2]);

// use three === because it also checks the object type
console.log("cockers" === "ballers")
// !== does not equal
console.log("cockers" !== "ballers")
// <,>,<=, >= are other operators

if (5>1) {
	console.log("Bite You");
}else if (5===5){
	console.log("Bite Me");
}else{
	console.log("Bite EVERYONE");
}	

// typeof variablename;


// alert("Hello World");
// document.getElementById("example").innerHTML = "HELLO WORLD";

// var x = 100;
// var y = 200;
// var result = x + y;

// console.log(result);

// var noun = "smalltalk";
// var verb = "runs";
// var sentence = noun + " " + verb + " fast.";

// console.log(sentence);
// console.log(noun + " " + verb + " fast.");
// console.log("smalltalk runs fast.");

// var shirmung = {
//   firstName: "Shirmung",
//   lastName: "Bielefeld",
//   birthday: "08/25/1900",
//   interests: ["dogs", "knitting"]
// };

// console.log(shirmung.firstName);
// console.log(shirmung.lastName);
// console.log(shirmung.birthday);
// console.log(shirmung.interests);
// console.log(shirmung.interests[0]);
// console.log(shirmung.interests[1]);


// // basic if else example, will cover more on Thursday:

// var password = "duck";

// if (password === "duck") {
//   console.log("correct password!");
// } else {
//   console.log("incorrect password");
// }