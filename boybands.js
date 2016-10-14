var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

		// The number of loops to perform (what if the array changes?)
		// var loopCount = 5;
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = [];

// Keep track of which veggie we're on in the loop
var currentVeggie = [];

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
// var hohohoElement = document.getElementById("coloredReindeer");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < loopCount; i += 1) {

		// console.log(bands[i]);
		// console.log(vegetables[i]);

// Add the band names into the correct <div>
  // currentBand = i;
  console.log(currentBand)
	bandElement.innerHTML += "<li>" + bands[i] + "</li>";

  // Add the veggie names into the correct <div>
  // currentVeggie = i;
  console.log(currentVeggie)
	veggieElement.innerHTML += "<li>" + vegetables[i] + "</li>";

}


// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)