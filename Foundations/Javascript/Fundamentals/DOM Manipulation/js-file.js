
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


let container = document.querySelector("body");

let content = document.createElement('p');
content.textContent = "Hey I'm red!";
container.appendChild(content);

content = document.createElement('h3');
content.textContent = "Hey I'm a blue h3!";
container.appendChild(content);

content = document.createElement('div');
content.style.backgroundColor = "black";
content.style.borderColor = "pink";
content.style.borderWidth = "2px"; // Adding border width
content.style.borderStyle = "solid"; // Adding border style
container.appendChild(content);

container = document.querySelector("div")
content = document.createElement('h1')
content.style.color = "white"
content.textContent = "I'm in a div";
container.appendChild(content)

content=document.createElement('p')
content.textContent = "ME TOO!"
content.style.color = "white"
container.appendChild(content)