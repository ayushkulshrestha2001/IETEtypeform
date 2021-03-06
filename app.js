function animatedform() {
    const arrow_next = document.querySelectorAll(".fa-arrow-down");
    const arrow_prev = document.querySelectorAll(".fa-arrow-up");

    arrow_next.forEach((arrow) => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            console.log("nextForm", nextForm, "parent", parent, "input", input);
            //check for validation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }
            //get rid of animation
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            });
        });
    });
    arrow_prev.forEach((arrow) => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling.previousElementSibling;
            const parent = arrow.parentElement;
            const prevForm = parent.previousElementSibling;
            console.log("prevform", prevForm, "parent", parent, "input", input);
            nextSlide(parent, prevForm);
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            });
        });
    });
}

function validateUser(user) {
    if (user.value.length == 0) {
        console.log("Enter name");
        error("rgb(189,87,87)");
    } else {
        error("rgb(87,189,130)");
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("rgb(87,189,130)");
        return true;
    } else {
        error("rgb(189,87,87)");
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedform();
