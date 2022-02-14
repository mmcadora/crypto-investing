var button = document.getElementById("button-login")

button.addEventListener("click", function(event) {
    event.preventDefault()
    console.log("test")
    window.location.href="home.html";
})
