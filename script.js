let password = document.querySelector("#password");
let confirm = document.querySelector("#confirmPassword");
let warningDisplayed = false;
let passParent = password.parentNode;

confirm.addEventListener("keyup", function () {
    if (confirm.value != password.value) {
        if (confirm.classList.contains("error")) {
            return;
        } else {
            confirm.classList.add("error");
        }

        if (password.classList.contains("error")) {
            return;
        } else {
            password.classList.add("error");
            showWarning();
        }
    } else {
        confirm.classList.remove("error");
        password.classList.remove("error");
        removeWarning();
    }
});

function showWarning() {
    let warning = document.createElement("span");
    warning.textContent = "* Passwords do not match";
    warning.classList.add("warning");
    if (warningDisplayed == false) {
        passParent.classList.add("warningParent");
        passParent.appendChild(warning);
        warningDisplayed = true;
    } else {
        return;
    }
}

function removeWarning() {
    passParent.classList.remove("warningParent");
    passParent.removeChild(passParent.lastElementChild);
    warningDisplayed = false;
}
