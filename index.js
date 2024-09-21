let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Mouse wheel scroll for horizontal scrolling
scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    // For most devices, deltaY is used to scroll horizontally in this case
    scrollcontainer.scrollLeft += evt.deltaY * 2;
    scrollcontainer.style.scrollBehavior = "auto";
});

// Click event for Next Button
nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900; // Scroll right by 900px
});

// Click event for Back Button
backBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900; // Scroll left by 900px
});
