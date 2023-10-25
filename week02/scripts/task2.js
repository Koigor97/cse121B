/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Samuel F. Turay";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();
// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
const myPhoto = "images/WEB-1-4.jpg";
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").src = myPhoto;
document.querySelector("img").style.width = "30%";
document.querySelector("img").style.borderRadius = "50%";
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favFoods = document.getElementById("food");
const favFood1 = ["Ribs", "Foo-foo and Okra soup", "Pot-roast Pork"];
// Step 2: place the values of the favorite foods variable into the HTML file
favFoods.textContent = favFood1;
// Step 3: declare and instantiate a variable to hold another favorite food
const favFood2 = ["Yogi-shake", "Toblerone", "Gummybear"];
// Step 4: add the variable holding another favorite food to the favorite food array
favFood1.push(...favFood2);
// Step 5: repeat Step 2
favFoods.textContent = favFood1;
// Step 6: remove the first element in the favorite foods array
favFood1.shift(0);
// Step 7: repeat Step 2
favFoods.textContent = favFood1;
// Step 8: remove the last element in the favorite foods array
favFood1.pop();
// Step 7: repeat Step 2
favFoods.textContent = favFood1;
