const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of seconds for countdown: ", function(seconds) {
    seconds = Number(seconds);

    let intervalId = setInterval(() => {
        console.log(`Remaining time: ${seconds}`);
        seconds--;

        if (seconds < 0) {
            clearInterval(intervalId);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);

    process.stdin.on("data", (key) => {
        if (key.toString().trim() === "s") {
            clearInterval(intervalId);
            console.log("Countdown Stopped by User!");
            rl.close();
        }
    });

});