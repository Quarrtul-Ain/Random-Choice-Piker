const textarea = document.getElementById("textarea");// HTML se textarea element ko uski id ki madad se select kar raha hai
const tagsContainer = document.getElementById("tags"); //selecting div container thats id ia "tags"

// Jab user keyboard ki koi key chhore (keyup event), ye function chalega
textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value); // Textarea ke andar jo text hai usay createTags function ko bhej raha hai

     // Check kar raha hai ke user ne Enter key dabayi hai ya nahi
    if (e.key === "Enter") {
        e.preventDefault();   // Enter ka default action (new line banana) rok deta hai

        setTimeout(() => {
            e.target.value = "";   // Textarea ko khali kar deta hai
        }, 10);

        alert("Choices entered successfully!");        // User ko popup message show karta hai
    }
});

// Function banaya gaya hai jo tags create karega
function createTags(input) {
    // Split text using commas
    const tags = input
        .split(",")
        .filter(tag => tag.trim() !== "")
        .map(tag => tag.trim());

    tagsContainer.innerHTML = "";

    tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagsContainer.appendChild(tagElement);
    });
}