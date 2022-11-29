let string = "";
let button = document.querySelectorAll(".key");
Array.from(button).forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "C") {
            document.querySelector("input").value = string = "";
        } else if (e.target.innerHTML == "x") {
            document.querySelector("input").value = string.slice(0, -1);
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        console.log(e.target);
        document.querySelector("input").style.color = "white";
    })
});

window.addEventListener("keydown", function (h) {
    if (h.keyCode == 55) {
        let sevenEdit = document.querySelector(".seven");
        sevenEdit.classList.add("seven-edit");
        // string = string + h.keyCode;
        document.querySelector("input").value = sevenEdit.innerHTML;
    }
});

window.addEventListener("keyup", function (h) {
    if (h.keyCode == 55) {
        let sevenEdit = document.querySelector(".seven");
        sevenEdit.classList.remove("seven-edit");
    }
});

