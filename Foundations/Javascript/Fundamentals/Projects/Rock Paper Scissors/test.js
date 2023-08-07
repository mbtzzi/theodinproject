const btn = document.querySelectorAll('button')
btn.forEach(element => {
    element.addEventListener('click', () => {
        console.log("Hola"); // Replace this with your desired code
    });
});


///////////////////////////

const btns = document.querySelectorAll('.btn');

btns.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent; // Get the text of the clicked button
        alert(`You clicked: ${buttonText}`);
    });
}); 