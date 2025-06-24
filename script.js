const add = document.querySelector(".add-poke");
const container = document.querySelector(".pokemon");
const deleteBtn = document.getElementById("delete-btn");

let targetElement = null;
let i = 1;

add.addEventListener("click", Pokemonadder);

function Pokemonadder() {
  const newone = document.createElement("div");
  newone.classList.add("add");

  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  img.alt = `pokemon-${i}`;

  newone.append(img);
  container.append(newone);
  i++;
}

window.addEventListener("click", function (e) {
  const el = e.target;

  if (el === deleteBtn || el === add) return;

  if (
    el.classList.contains("add") ||
    el.parentElement?.classList.contains("add")
  ) {
    targetElement = el.classList.contains("add") ? el : el.parentElement;
    const rect = targetElement.getBoundingClientRect();

    deleteBtn.style.left = `${rect.right - 100 + window.scrollX}px`;
    deleteBtn.style.top = `${rect.top - 30 + window.scrollY}px`;
    deleteBtn.style.display = "inline-block";
  } else {
    deleteBtn.style.display = "none";
    targetElement = null;
  }
});

deleteBtn.addEventListener("click", function () {
  if (targetElement) {
    targetElement.remove();
    deleteBtn.style.display = "none";
  }
});


gsap.to("h1", {
  backgroundColor: "#fff",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "h1",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    scrub: 1,
    end: "top -11%",
  },
});


gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    scrub: 2,
    end: "top -75%",
  },
});

