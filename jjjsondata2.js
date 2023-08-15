document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch("sushi-data.json")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error("Error fetching JSON data:", error));


});

function displayData(data) {
    const jsonDataDiv = document.getElementById("json-data");
    jsonDataDiv.innerHTML = ""; // Clear any existing content

    data.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("json-item");

        const nameDiv = document.createElement("h2");
        nameDiv.classList.add("name");
        nameDiv.textContent = item.name;

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.textContent = item.description;

        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(descriptionDiv);

        jsonDataDiv.appendChild(itemDiv);
    });
// if (performance.navigation.type === 1) {
//   setTimeout(function() {
//     window.location.href = "training.html";
//   }, 100);
// }

}
