const formData = { email: "", message: "" };
const inputs = document.querySelector("form.feedback-form").elements;

document.querySelector('form.feedback-form').oninput = function() {
    formData["email"] = inputs["email"].value.trim();
    formData["message"] = inputs["message"].value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("feedback-form-state")) {
        const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
        inputs["email"].value = savedData.email;
        inputs["message"].value = savedData.message;
        formData["email"] = savedData["email"];
        formData["message"] = savedData["message"];
    }
})

document.querySelector('form.feedback-form').onsubmit = function(event) {
    event.preventDefault();
    for (let input of inputs) {
        if (input.type !== 'submit' && !input.value.trim().length) {
            window.alert("Fill please all fields");
            return;
        }
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData["email"] = "";
    formData["message"] = "";
    inputs["email"].value = "";
    inputs["message"].value = "";
}