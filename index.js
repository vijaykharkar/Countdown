// Function to calculate and update countdown
function updateCountdown() {
  const targetDate = new Date("January 1, 2026 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const difference = targetDate - currentDate;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  } else {
    document.querySelector(
      ".countdown-container"
    ).innerHTML = `<h1>Happy New Year 2026! 🎉</h1>`;
  }
}

// Call the function every second
setInterval(updateCountdown, 1000);
