let currentWall = 0;
const walls = document.querySelectorAll(".wall");

function navigateGallery(direction) {
    walls[currentWall].style.display = "none";
    currentWall = (currentWall + direction + walls.length) % walls.length;
    walls[currentWall].style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    walls.forEach((wall, index) => {
        if (index !== currentWall) wall.style.display = "none";
    });
});
