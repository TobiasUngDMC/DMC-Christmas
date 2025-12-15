const buttons = document.querySelectorAll(".playBtn");
let currentAudio = null;

buttons.forEach(btn => {
    const audio = btn.parentElement.querySelector("audio");
    const icon = btn.querySelector("i");

    btn.addEventListener("click", () => {

        // Stop currently playing audio if it's not the same one
        if (currentAudio && (currentAudio !== audio)) {
            currentAudio.pause();
            currentAudio.currentTime = 0;

            // reset all play icons
            document.querySelectorAll(".playBtn i").forEach(i => {
                i.classList.remove("fa-pause");
                i.classList.add("fa-play");
            });
        }

        // Toggle play/pause
        if (audio.paused) {
            audio.play();
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
            currentAudio = audio;
        } else {
            audio.pause();
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            //currentAudio = null;
        }

        audio.addEventListener("ended", () => {
            // Reset audio position
            audio.currentTime = 0;
            console.log("Audio Ended");

            // Reset the button icon
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");

            // Clear current audio reference
            if (currentAudio === audio) {
                currentAudio = null;
            }
        });
    });
});

