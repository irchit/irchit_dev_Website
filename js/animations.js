var burgerOpen = false;

function openBurger( b ){
    const lines = document.getElementsByClassName("line");
    lines[0].classList.add("after-line1");
    lines[1].classList.add("after-center");
    lines[2].classList.add("after-line2");
}

function closeBurger( b ){
    const lines = document.getElementsByClassName("line");
    lines[0].classList.remove("after-line1");
    lines[1].classList.remove("after-center");
    lines[2].classList.remove("after-line2");
}

function openHeader(){
    const burger = document.getElementById("burger");
    const list = document.getElementById("links");
    if (burgerOpen == 0) {
        openBurger(burger);
        list.classList.add("open-links");
    } else {
        closeBurger(burger);
        list.classList.remove("open-links");
    }
    burgerOpen = !burgerOpen;
}