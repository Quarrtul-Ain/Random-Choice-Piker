const textarea = document.getElementById("textarea");
const tagsContainer = document.getElementById("tags");

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if (e.key === "Enter") {
        e.preventDefault();

        setTimeout(() => {
            e.target.value = "";
        }, 10);

        alert("Choices entered successfully!");
    }
});

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