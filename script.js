// console.log("Say oh yeahhh")

backToTopBtn = document.querySelectorAll('.back-to-top');

backToTopBtn.forEach(element => {
    element.addEventListener("click", function() {
        // console.log("clicked");
        window.scrollTo(0, 0);
    });
});