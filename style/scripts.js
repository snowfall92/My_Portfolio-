// Function to fetch and load language-specific content
function changeLanguage(lang) {
    const contentContainer = document.getElementById("content");

    // Make an AJAX request to fetch the language-specific content
    fetch(`path/to/your/${lang}_content.json`)
        .then(response => response.json())
        .then(data => {
            // Update the content container with the fetched data
            contentContainer.innerHTML = `
                <h3>${data.heading}</h3>
                <h1>${data.name}</h1>
                <h2>${data.subtitle}</h2>
                <p>${data.description}</p>
                <div class="btn_container">
                    <a href="${data.button_link}"><button class="btn btn-light animate__animated">${data.button_text}</button></a>
                </div>
            `;
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
}
