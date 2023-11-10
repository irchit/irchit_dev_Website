const items = document.querySelectorAll(".carousel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function update() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else if (index < currentIndex) {
      item.classList.add("prev");
      item.classList.remove("next");
    } else if (index > currentIndex) {
      item.classList.add("next");
      item.classList.remove("prev");
    }
    item.classList.remove("active");
  });
}

function increment() {
  currentIndex = (currentIndex + 1) % items.length;
  update();
}

function decrement() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  update();
}

prev.addEventListener("click", decrement);
next.addEventListener("click", increment);

setInterval(increment, 3000);

update();
