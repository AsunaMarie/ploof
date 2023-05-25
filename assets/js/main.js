// Navbar Menu
const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const menuNav = document.getElementById("menu-nav")

menuOpen.addEventListener("click", () => {
    menuOpen.classList.add("hidden")
    menuClose.classList.remove("hidden")
    menuNav.classList.remove("hidden")
})

menuClose.addEventListener("click", () => {
    menuOpen.classList.remove("hidden")
    menuClose.classList.add("hidden")
    menuNav.classList.add("hidden")
})

// Home Modal
const homeModal = document.getElementById("home-modal")
const homeModalCloseBtn = document.getElementById("home-modal-close-btn")
const homeLearnMoreBtn = document.getElementById("home-learn-more-btn")

homeModal.addEventListener("click", (e) => {
    if (e.target === homeModal) {
        homeModal.close()
    }
})

homeLearnMoreBtn.addEventListener("click", () => {
    homeModal.showModal()
})

homeModalCloseBtn.addEventListener("click", () => {
    homeModal.close()
})

// Plush Penguin Modal
const plushPenguinModal = document.getElementById("plush-penguin-modal")
const plushPenguinModalCloseBtn = document.getElementById("plush-penguin-modal-close-btn")
const plushPenguinLearnMoreBtn = document.getElementById("plush-penguin-learn-more-btn")

plushPenguinModal.addEventListener("click", (e) => {
    if (e.target === plushPenguinModal) {
        plushPenguinModal.close()
    }
})

plushPenguinLearnMoreBtn.addEventListener("click", () => {
    plushPenguinModal.showModal()
})

plushPenguinModalCloseBtn.addEventListener("click", () => {
    plushPenguinModal.close()
})

// Plush Bear Modal
const plushBearModal = document.getElementById("plush-bear-modal")
const plushBearModalCloseBtn = document.getElementById("plush-bear-modal-close-btn")
const plushBearLearnMoreBtn = document.getElementById("plush-bear-learn-more-btn")

plushBearModal.addEventListener("click", (e) => {
    if (e.target === plushBearModal) {
        plushBearModal.close()
    }
})

plushBearLearnMoreBtn.addEventListener("click", () => {
    plushBearModal.showModal()
})

plushBearModalCloseBtn.addEventListener("click", () => {
    plushBearModal.close()
})

// Plush Cow Modal
const plushCowModal = document.getElementById("plush-cow-modal")
const plushCowModalCloseBtn = document.getElementById("plush-cow-modal-close-btn")
const plushCowLearnMoreBtn = document.getElementById("plush-cow-learn-more-btn")

plushCowModal.addEventListener("click", (e) => {
    if (e.target === plushCowModal) {
        plushCowModal.close()
    }
})

plushCowLearnMoreBtn.addEventListener("click", () => {
    plushCowModal.showModal()
})

plushCowModalCloseBtn.addEventListener("click", () => {
    plushCowModal.close()
})