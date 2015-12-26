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

function mouseover() {
	document.getElementById("Mouseover1").innerHTML = "Oh crap!! A MOUSE!!!";
	console.log("A Mouse in the Console!!!")
	alert("Alert Mouse!!!!")

	document.getElementById("Mouseover1").innerHTML = "A SECOND MOUSE!!!";
	console.log("A Second Mouse")
	alert("Alert TWO MICE")

}


var democrat_array = ["Hilary", "Bernie"];
var republican_array = ["Trump", "Cruz", "Rubio", "Carson"] 
var candidate_array = [democrat_array,republican_array];
	// alert(candidate_array[1][2]);
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



  //   	$(document).ready(function(){
    		
  //   	animate will shift whatever is referenced
    		
  //   		$(".crap").animate({
  //   			opacity: 0.5,
  //   			width: 1000,
  //   		} , 5000);

		// fadeOut and fadeIn will cause something to disappear and reappear    		

  //       $("p").fadeOut(1000, function(){
  //   			$("p").fadeIn(500);

  //   		});


  //       // if i click this button, it will launch an alert
          
  //   		$("button").click(
  //   			function() {
  //   				alert("cluckcluckcluck");
  //   			}
  //   		)
    	
  //   	}
  //   );


