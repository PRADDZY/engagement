const countdownBanner = document.getElementById("countdown-banner");

function updateCountdown() {
    const targetDate = new Date("December 7, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownBanner.innerHTML = `Countdown: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    } else {
        countdownBanner.innerHTML = "The engagement day has arrived!";
    }
}

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Set random image, position, size, and duration for each flower
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.width = flower.style.height = `${20 + Math.random() * 30}px`;
   
    // Randomly select an image from flower1.png to flower5.png
    const randomFlowerIndex = Math.floor(Math.random() * 5) + 1;
    flower.style.backgroundImage = `url('flower${randomFlowerIndex}.png')`;
    
    flower.style.animationDuration = `${5 + Math.random() * 5}s`;

    document.querySelector(".flower-animation").appendChild(flower);

    // Remove flower element after falling
    flower.addEventListener("animationend", () => flower.remove());
}

// Update countdown every second and create flower every 0.5 seconds
setInterval(updateCountdown, 1000);
setInterval(createFlower, 1000);
