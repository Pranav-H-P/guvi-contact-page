const nameInput = document.getElementById("nameInput") as HTMLInputElement; // storing elements
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const numberInput = document.getElementById("numberInput") as HTMLInputElement;
const subjectInput = document.getElementById("subjectInput") as HTMLInputElement;
const messageInput = document.getElementById("messageBox") as HTMLInputElement;





document.getElementById("inputForm")?.addEventListener("submit", async (event: Event): Promise<void> => { // event listener for input button press

    const name = nameInput?.value;
    const email = emailInput?.value;
    const number = numberInput?.value;
    const subject = subjectInput?.value;
    const message = messageInput?.value;

    nameInput?.classList.remove("invalid");
    emailInput?.classList.remove("invalid");
    numberInput?.classList.remove("invalid");
    subjectInput?.classList.remove("invalid");
    messageInput?.classList.remove("invalid");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // regex for email checking


    event.preventDefault();  // Prevent html submission

    
    if (!name) {
        nameInput?.classList.add("invalid");
        alert("Please fill in your name");
        return;

    }else if (!number){
        numberInput?.classList.add("invalid");
        alert("Please provide your number");
        return;

    }else if (!subject){
        subjectInput?.classList.add("invalid");
        alert("Please enter a subject");
        return;

    }else if (!message){
        messageInput?.classList.add("invalid");
        alert("Please type a message");
        return;

    }else if (!emailRegex.test(email) || !email) {
        emailInput?.classList.add("invalid");
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
        
        const response = await fetch('https://671662993fcb11b265d22e39.mockapi.io/api/contact/formData', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),

        });

        if (response.ok) {

            alert("Form Submitted Successfully");

        } else {

            throw new Error("Failed to submit form");

        }
    } catch (error) {

        alert("Submission Failed: " + (error as Error).message);

    }
} );


document.getElementById("nameInput")?.setAttribute("placeholder", "Enter your first name"); // Set placeholder text
document.getElementById("emailInput")?.setAttribute("placeholder", "Enter your email address");
document.getElementById("numberInput")?.setAttribute("placeholder", "Enter your contact number");
document.getElementById("subjectInput")?.setAttribute("placeholder", "Enter the subject");
document.getElementById("messageBox")?.setAttribute("placeholder", "Enter your message");
