"use strict";

// Getting all the html element I need to work with.
let input = document.querySelector("#reference");
let translation = document.querySelector("#translation");
const theDiv = document.querySelector(".result");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

// creating html 'P' tags for assignin the value from
// the data recieved and appending them
const refPara = document.createElement("p");
const versePara = document.createElement("p");

// this function is resposible for styling the paragraphs
const DisplayStyle = function (para1, para2) {
    para1.style.textDecoration = "underline";
    para1.style.fontWeight = "bold";
    para1.style.textTransform = "uppercase";
    para2.style.color = "#fcffaa";
    // para2.style.transition = "all .3s";

}

// this function calls the Display style function and
// is also responsible for assigning and appending the 
// data from recieved from the API
const appendElement = function (data) {
    DisplayStyle(refPara, versePara);

    refPara.textContent = data["reference"];
    let content = data["text"];
    versePara.textContent = content.trim();
    theDiv.appendChild(refPara);
    theDiv.appendChild(versePara);
}

// creating an async await function for fetch the data
// from the API
async function result(url) {
    const response = await fetch(url);
    let result = await response.json()
    console.log(result);
    appendElement(result);
};

// this is the event listening for when clicks on the 
// button
btn.addEventListener("click", () => {
    let URL = "";
    if (translation.value === "") {
        URL = `https://bible-api.com/${input.value}`;
    }else {
        URL = `https://bible-api.com/${input.value}?translation=${translation.value.toLowerCase()}`
    };
    result(URL);
});

btn2.addEventListener("click", () => {
    theDiv.removeChild(refPara)
    theDiv.removeChild(versePara)
});