var openButtons = document.querySelectorAll(".dropdown_header_button")

openButtons.forEach (button => {
    button.addEventListener("click", () => {
        switch (button.getAttribute("active")) {
            case "true":
                button.style.backgroundColor = "hsl(292, 42%, 14%)";
                button.setAttribute("active", "false");
                button.innerHTML = "-"
                button.parentNode.parentNode.childNodes[3].style.display = "block";
                break;
        
            default:
                button.innerHTML = "+"
                button.style.backgroundColor = "hsl(292, 16%, 49%)";
                button.setAttribute("active", "true");
                button.parentNode.parentNode.childNodes[3].style.display = "none"
                break;
        }
    })
})