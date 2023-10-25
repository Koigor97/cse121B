"use strict";
/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let authorInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
authorInfo["name"] = "Samuel F. Turay";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
authorInfo["photo"] = "images/author.webp";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
authorInfo["favoriteFoods"] = ["Barbeque Ribbs", "Rice cakes", "Foofoo and Agusie"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
authorInfo["hobbies"] = ["Soccer", "Photography", "Eating", "Hiking"];
// Step 6: Add another property named placesLived with a value of an empty array
authorInfo["placesLived"] = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
authorInfo.placesLived.push({"place": "", "lengthOfStay": ""});
// Step 8: For each property, add appropriate values as strings
authorInfo.placesLived[0].place = "Morocco";
authorInfo.placesLived[0].lengthOfStay = "3 months";
// Step 9: Add additional objects with the; same properties for each place you've lived
authorInfo.placesLived.push({"place": "South Africa", "lengthOfStay": "1 year"});

/* OUTPUT */
// This is a resuable function expression the takes two paramenter (aList, aID/Class) and renders the information to the webpage.
const displayValue = function(list, selector) {
    for (const item of list) {
        document.querySelector(selector).innerHTML += `<li>${item}</li>`
    }
}
// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = authorInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = authorInfo.photo;
document.getElementById("photo").style.width = '20%';
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = authorInfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
displayValue(authorInfo.favoriteFoods, "#favorite-foods");
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
displayValue(authorInfo.hobbies, "#hobbies");
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const displayObj = function(list, selector) {
    for (const item of list) {
        const dt = item.place;
        const dd = item.lengthOfStay;
        document.querySelector(selector).innerHTML += `<dt>${dt}:</dt> <dd>${dd}</dd>`
    }
}
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
displayObj(authorInfo.placesLived, "#places-lived");