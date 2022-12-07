export const scrollEvent = () => {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTop.classList.add("show");

        backToTop.style.zIndex = 999;
    } else {
        backToTop.classList.remove("show");
    }
};
