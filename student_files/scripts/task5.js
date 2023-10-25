/* Lesson 5 */
"use strict";
/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const theDate = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek = "";
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = theDate.toLocaleDateString('default', {
    weekday: "long"
});
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// console.log(dayOfWeek);
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
if (daysOfTheWeek.includes(dayOfWeek)) {
    message = "Hang in there ✊🏾!!";
} else {
    message = "Woohooo! It's the weekend"
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        message2 = dayOfWeek;
        break;
    default:
        console.log(`${dayOfWeek} is not a Weekday`);
        break;
}
/* OUTPUT */
const temples = document.querySelector("#temples");
// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
const firstMessage = document.querySelector("#message1");
firstMessage.textContent = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
const secondMessage = document.querySelector("#message2");
secondMessage.textContent = message2;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let listOfTemple = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(aList) {
    aList.forEach(temple => {
        // - Creates an HTML <article> element
        const article = document.createElement("article");
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        const templeName = document.createElement("h3");
        templeName.textContent = `Temple Name ⛪️: ${temple.templeName}`;
        // - Creates an HTML <h4> element and add the temple's location property to it
        const templeLocation = document.createElement("h4");
        templeLocation.textContent = `Location 📍: ${temple.location}`
        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        const templeDedication = document.createElement("h4");
        templeDedication.textContent = `Dedication  👷🏽‍♂️: ${temple.dedicated}`;
        // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        const templeImage = document.createElement("img");
        templeImage.src = `${temple.imageUrl}`;
        templeImage.alt = `${temple.templeName}`;
        // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        article.appendChild(templeName);
        article.appendChild(templeLocation);
        article.appendChild(templeDedication);
        article.appendChild(templeImage);
        // - Appends the <article> element to the HTML element with an ID of temples
        temples.appendChild(article);
    });
}


// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
const endPoint = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function getTemples(url) {
    let response = await fetch(url);
    listOfTemple = await response.json();
    // const assorted = listOfTemple.sort()
    console.log(listOfTemple);
    // console.log(assorted);
    output(listOfTemple);
}
getTemples(endPoint);


// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    temples.remove();
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
const conditionValue = document.querySelector("#sortBy");

function sortBy() {
    let sorted = "";
    // reset();
    if (conditionValue.value === "templeNameDescending") {
        sorted = listOfTemple.sort(function (a, b) {
            return a.templeName < b.templeName;
        });
        
    } else if (conditionValue.value === "templeNameAscending"){
        sorted = listOfTemple.sort();
    }
    output(sorted);

}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
conditionValue.addEventListener('click', sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files