var openButtons = document.querySelectorAll(".dropdown_header_button")

openButtons.forEach (button => {
    button.addEventListener("click", () => {
        if (button.getAttribute("active") == "false") {
            console.log(button.getAttribute("active"))
            button.setAttribute("active", "true")
        } else if (button.getAttribute("active") == "true"){
            console.log(button.getAttribute("active"))
            button.setAttribute("active", "false")
        }
        
    })
})