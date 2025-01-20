const button = document.getElementById("musicbtn");
const icon = document.getElementById("volumebtn");
const blur = document.getElementById("blurthepage");
const audio = document.getElementById("audioatp");
icon.classList.add("fa-volume-mute");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function change() {
    await sleep(500);
    blur.classList.add("blurpagerplc2");
}

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.04;
        audio.play();
        icon.classList.remove("fa-volume-mute");
        icon.classList.add("fa-volume-up");
    } else {
        audio.pause();
        icon.classList.remove("fa-volume-up");
        icon.classList.add("fa-volume-mute");
    }
    button.classList.add("replace");
    blur.classList.add("blurpagerplc");
    change();
});
