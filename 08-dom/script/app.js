// use DOM to manipulate href attribute of element <a>
//       document.body.children[1].children[0].href = "https:www.google.com";

//  query method to get HTML element
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https:www.google.com";

// parameter is a css selector
anchorElement = document.querySelector("#external-link"); // query by id
anchorElement.href = "https:www.baidu.com";

// query by tag type --> if you have multiple same tag then return the first one.
anchorElement = document.querySelector("a");

// ADD AN ELEMENT
//1. create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https:www.google.com";
newAnchorElement.textContent = "this is to google";
//2, get access to the parent element that sould hold the new element
let firstParagraph = document.querySelector("p");

//3. insert the new element into the parent element content
firstParagraph.append(newAnchorElement);


// REMOVE AN ELEMENT
// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");
// 2. Remove it!
// firstH1Element.remove(); --> this may not be supported by older broswers.
firstH1Element.parentElement.removeChild(firstH1Element); // --> supported by all broswers




// MOVE ELEMENT 
firstParagraph.parentElement.append(firstParagraph);



// innerHTML
console.log(firstParagraph.innerHTML); // this will get the whole html element(inclding content)

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong> ';