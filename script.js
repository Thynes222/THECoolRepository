function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Add a leading zero if the number is less than 10
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clockDisplay').innerHTML = h + ":" + m + ":" + s;

    // Update the time every 1000 milliseconds (1 second)
    setTimeout(startTime, 1000);
}

// Helper function to add a leading zero
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Function to be executed when the button is clicked
function handleClick() {
    alert("Button was clicked!");
    console.log("Function executed.");
}

// Select the button element by its ID
const button = document.getElementById("myButton");

// Add a 'click' event listener to the button
button.addEventListener("click", handleClick);


// 1. Get references to the HTML elements
const showImageButton = document.getElementById('showImageButton');
const hiddenImage = document.getElementById('hiddenImage');

// 2. Add an event listener to the button
showImageButton.addEventListener('click', function() {
    // 3. When clicked, add the 'visible' class to the image element
    // This overrides the 'display: none' set in the CSS file
    hiddenImage.classList.add('visible');
    
    // Optional: Change the button text/disable it after clicking
    // showImageButton.textContent = 'Image Displayed';
    // showImageButton.disabled = true;
});
