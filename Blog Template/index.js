let ham = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let container = document.querySelector('.nav-h')

ham.addEventListener('click', () => {
    menu.classList.toggle('main');
    container.classList.toggle('nav-h');
})



function storeAndRedirect() {
    // Get form fields
    const name = document.getElementById("Name").value.trim();
    const title = document.getElementById("Title").value.trim();
    const image = document.getElementById("Images").files[0];
    const message = document.getElementById("Message").value.trim();

    // Simple validation
    if (!name || !title || !image || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Store in localStorage
    localStorage.setItem("Name", name);
    localStorage.setItem("Title", title);
    localStorage.setItem("Images", image.name); // stores only the file name
    localStorage.setItem("Message", message);

    console.log("Data stored!");

    // Show message
    document.getElementById("message").style.display = "block";

    // Redirect after 5 seconds
    setTimeout(function () {
        window.location.href = "index.html";
    }, 5000);
}

function retrieve() {

    var x = localStorage.getItem("Images");
    document.getElementById("Gallery").innerHTML = x;

    var x = localStorage.getItem("Title");
    document.getElementById("Heading").innerHTML = x;

    var x = localStorage.getItem("Message");
    document.getElementById("Desc").innerHTML = x;

    var x = localStorage.getItem("Name");
    document.getElementById("Author").innerHTML = "<span style='color: #0396ff; font-weight: bold;'>Author : " + "</span>" + x ;

}

