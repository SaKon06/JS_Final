window.addEventListener("keyup", press);

let currentIndex = 0;

function changeImage() {
    let imageDiv = document.getElementById("image");
    let previewImages = document.querySelectorAll(".preview");
    imageDiv.style.backgroundImage = `url('${previewImages[currentIndex].src}')`;
    imageDiv.textContent = previewImages[currentIndex].alt;
    console.log("Worked   - " + `url('${previewImages[currentIndex].src}')`);
    console.log("Worked   - " + previewImages[currentIndex].alt);

    currentIndex = (currentIndex + 1) % 3;
}

function press(event) {
    if (event.key == "x" || event.key == "X") {
        changeImage();
    }
}


