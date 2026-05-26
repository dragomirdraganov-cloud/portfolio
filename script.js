const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const filterButtons = document.querySelectorAll("[data-filter]");
const appCards = document.querySelectorAll("[data-category]");

const closeNav = () => {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Abrir menu");
};

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("nav-open") || !(event.target instanceof Node)) {
    return;
  }

  const clickIsInsideNav = nav?.contains(event.target) ?? false;
  const clickIsToggle = navToggle?.contains(event.target) ?? false;

  if (!clickIsInsideNav && !clickIsToggle) {
    closeNav();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter ?? "all";

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    appCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
