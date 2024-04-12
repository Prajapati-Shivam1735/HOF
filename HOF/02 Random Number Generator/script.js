function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generating random number after a delay of ${delayInSeconds} seconds...`);
    let timeLeft = delayInSeconds;

    const countdownInterval = setInterval(() => {
        console.log(`${timeLeft} seconds remaining...`);
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            const randomNumber = Math.floor(Math.random() * 100); 
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

const delayInSeconds = 3;
generateRandomNumberWithDelay(delayInSeconds);
