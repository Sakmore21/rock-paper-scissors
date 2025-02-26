const gameContainer = document.querySelector(".container"); // Game container
const userResult = document.querySelector(".user_result img"); // User's result image
const botResult = document.querySelector(".bot_result img"); // BOT's result image
const result = document.querySelector(".result"); // Result display text
const optionImages = document.querySelectorAll(".option_image"); // User options
const botImages = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"]; // BOT's image options

const outcomes = {
  RR: "Draw", RP: "BOT", RS: "YOU", // Possible outcomes
  PP: "Draw", PR: "YOU", PS: "BOT",
  SS: "Draw", SR: "BOT", SP: "YOU"
};

function handleOptionClick(event) {
  const clickedImage = event.currentTarget; // The clicked option
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage); // Index of the clicked option

  // Reset game state
  userResult.src = botResult.src = "images/rock.jpg";
  result.textContent = "Wait...";

  optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex); // Highlight selected option
  });

  gameContainer.classList.add("start");

  // Simulate game logic
  setTimeout(() => {
    gameContainer.classList.remove("start");
    userResult.src = clickedImage.querySelector("img").src;

    const randomNumber = Math.floor(Math.random() * botImages.length);
    botResult.src = botImages[randomNumber];

    const userValue = ["R", "P", "S"][clickedIndex]; // Map to R, P, S
    const botValue = ["R", "P", "S"][randomNumber];
    const outcomeKey = userValue + botValue;
    const outcome = outcomes[outcomeKey] || "Unknown";

    // Update result text
    result.textContent = userValue === botValue ? "Match Draw" : `${outcome} WON!`;
  }, 2500); // Delay for animations
}

// Attach event listeners to each option
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});
