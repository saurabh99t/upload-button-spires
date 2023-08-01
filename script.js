document.getElementById("resumeInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const statusElement = document.getElementById("status");

    statusElement.innerText = "Uploading...";

    // Simulate an upload process with a setTimeout for demonstration purposes
    setTimeout(() => {
        if (file) {
            statusElement.innerText = "Upload successful!";
            statusElement.classList.add("success");
        } else {
            statusElement.innerText = "Upload failed!";
            statusElement.classList.add("error");
        }
    }, 2000);
});











const modal = document.getElementById("modal");
const uploadBtn = document.getElementById("uploadBtn");
const closeBtn = document.getElementById("closeBtn");

// Show the modal when the upload button is clicked
uploadBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Hide the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Code for handling the resume upload process (similar to previous example)
document.getElementById("resumeInput").addEventListener("change", function (event) {
    // ...
    // Resume upload handling code goes here
    // ...
});
