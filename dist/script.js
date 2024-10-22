"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f;
const nameInput = document.getElementById("nameInput"); // storing elements
const emailInput = document.getElementById("emailInput");
const numberInput = document.getElementById("numberInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageBox");
(_a = document.getElementById("inputForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    const name = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value;
    const email = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value;
    const number = numberInput === null || numberInput === void 0 ? void 0 : numberInput.value;
    const subject = subjectInput === null || subjectInput === void 0 ? void 0 : subjectInput.value;
    const message = messageInput === null || messageInput === void 0 ? void 0 : messageInput.value;
    nameInput === null || nameInput === void 0 ? void 0 : nameInput.classList.remove("invalid");
    emailInput === null || emailInput === void 0 ? void 0 : emailInput.classList.remove("invalid");
    numberInput === null || numberInput === void 0 ? void 0 : numberInput.classList.remove("invalid");
    subjectInput === null || subjectInput === void 0 ? void 0 : subjectInput.classList.remove("invalid");
    messageInput === null || messageInput === void 0 ? void 0 : messageInput.classList.remove("invalid");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // regex for email checking
    event.preventDefault(); // Prevent html submission
    if (!name) {
        nameInput === null || nameInput === void 0 ? void 0 : nameInput.classList.add("invalid");
        alert("Please fill in your name");
        return;
    }
    else if (!number) {
        numberInput === null || numberInput === void 0 ? void 0 : numberInput.classList.add("invalid");
        alert("Please provide your number");
        return;
    }
    else if (!subject) {
        subjectInput === null || subjectInput === void 0 ? void 0 : subjectInput.classList.add("invalid");
        alert("Please enter a subject");
        return;
    }
    else if (!message) {
        messageInput === null || messageInput === void 0 ? void 0 : messageInput.classList.add("invalid");
        alert("Please type a message");
        return;
    }
    else if (!emailRegex.test(email) || !email) {
        emailInput === null || emailInput === void 0 ? void 0 : emailInput.classList.add("invalid");
        alert("Please enter a valid email address");
        return;
    }
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        number: numberInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };
    try { // make api request
        const response = yield fetch('https://671662993fcb11b265d22e39.mockapi.io/api/contact/formData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert("Form Submitted Successfully");
        }
        else {
            throw new Error("Failed to submit form");
        }
    }
    catch (error) {
        alert("Submission Failed: " + error.message);
    }
}));
(_b = document.getElementById("nameInput")) === null || _b === void 0 ? void 0 : _b.setAttribute("placeholder", "Enter your first name"); // Set placeholder text
(_c = document.getElementById("emailInput")) === null || _c === void 0 ? void 0 : _c.setAttribute("placeholder", "Enter your email address");
(_d = document.getElementById("numberInput")) === null || _d === void 0 ? void 0 : _d.setAttribute("placeholder", "Enter your contact number");
(_e = document.getElementById("subjectInput")) === null || _e === void 0 ? void 0 : _e.setAttribute("placeholder", "Enter the subject");
(_f = document.getElementById("messageBox")) === null || _f === void 0 ? void 0 : _f.setAttribute("placeholder", "Enter your message");
