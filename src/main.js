function fixRestaurantsList() {
    document.querySelectorAll(".js-restaurant").forEach(e => e.classList.remove("js-restaurant"));
}

setInterval(fixRestaurantsList, 500);
