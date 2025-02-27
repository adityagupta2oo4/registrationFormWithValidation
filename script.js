function validateName() {
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("nameError");
    if (!/^[a-zA-Z ]+$/.test(name)) {
        nameError.textContent = "*Name must contain only letters and spaces";
    } else {
        nameError.textContent = "";
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "*Enter a valid email";
    } else {
        emailError.textContent = "";
    }
}

function validateMobile() {
    let mobile = document.getElementById("mobile").value;
    let mobileError = document.getElementById("mobileError");
    if (!/^[0-9]{10}$/.test(mobile)) {
        mobileError.textContent = "*Mobile number must be 10 digits";
    } else {
        mobileError.textContent = "";
    }
}

function validateID() {
    let idNumber = document.getElementById("idNumber").value;
    let idError = document.getElementById("idError");
    if (!/^[0-9]+$/.test(idNumber)) {
        idError.textContent = "*ID Number must contain only numbers";
    } else {
        idError.textContent = "";
    }
}

document.getElementById("submitBtn").addEventListener("click", function() {
    let inputs = document.querySelectorAll("input, select");
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("All fields must be filled!");
            return;
        }
    }
    alert("Form submitted successfully!");
});