

document.addEventListener("DOMContentLoaded", function () {
    const containerPerson = document.querySelector(".container-person")
    const infoPerson = document.querySelector(".info-person")
    const rrssWrapper = document.querySelector(".rrss-wrapper")
    var anchoPantalla = window.innerWidth || this.documentElement.clientWidth || document.body.clientWidth;
    const shareButton = document.querySelector(".share-botton")
    const rrssContainer = document.querySelector(".rrss-container")
    const arrow = document.querySelector(".arrow");

    if (rrssContainer) {

        shareButton.addEventListener("click", function () {
            console.log(rrssContainer.style.display);
            console.log(window.getComputedStyle(rrssContainer).display);

            if (window.getComputedStyle(rrssContainer).display === "none") {
                rrssContainer.style.display = "flex";
                if (anchoPantalla <= 800) {
                    rrssWrapper.classList.add('rrss-wrapper-mobile');
                    containerPerson.classList.add("container-person-mobile");
                    infoPerson.classList.add("info-person-mobile");
                    rrssContainer.classList.add("rrss-container-mobile");
                    shareButton.classList.add("share-botton-mobile");
                    arrow.classList.add("arrow-mobile");

                }
            }

            else {
                rrssContainer.style.display = ("none");
                rrssWrapper.classList.remove('rrss-wrapper-mobile');
                containerPerson.classList.remove("container-person-mobile");
                infoPerson.classList.remove("info-person-mobile");
                rrssContainer.classList.remove("rrss-container-mobile");
                shareButton.classList.remove("share-botton-mobile");
                arrow.classList.remove("arrow-mobile");

            }
        })
    }

});


