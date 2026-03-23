let selectedCategory = "Programming";


function setCategory(category, event) {
    selectedCategory = category;

    document.querySelectorAll(".type")
        .forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}


async function generateJoke() {
    const jokeBox = document.getElementById("jokeBox");
    jokeBox.innerHTML = "Loading joke... 😂";

    try {
        const response = await fetch(
            `https://v2.jokeapi.dev/joke/${selectedCategory}?safe-mode`
        );

        const data = await response.json();

        if (data.type === "single") {
            jokeBox.innerHTML = data.joke;
        } else {
            jokeBox.innerHTML = data.setup + "<br><br>" + data.delivery;
        }

    } catch (error) {
        jokeBox.innerHTML = "Failed to load joke 😢";
        console.error(error);
    }
}
