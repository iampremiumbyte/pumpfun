const startButton = document.querySelector("#startButton")
const video = document.querySelector("#video")
const overlay = document.querySelector("#overlay")
const startwrap = document.querySelector("#startwrap")
const bgAudio = document.querySelector("#bg-audio")


const styleBoxes = () => {

    Array(3).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 1}`);

        const area = document.getElementById(`area${i + 1}`);

        const coords = area.coords.split(",");

        box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box.style.left = Number(coords[0]) + "px"
        box.style.top = Number(coords[1]) + "px"
    });

}


startButton.addEventListener("click", () => {
    startwrap.style.display = "none";
    video.play();
    video.addEventListener("ended", () => {
        overlay.style.display = "none";
        styleBoxes();
    })
});