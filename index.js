let homeScore = 0
let guestScore = 0

let scoreHomeDisplay = document.getElementById("home-score")
let scoreGuestDisplay = document.getElementById("guest-score")

scoreHomeDisplay.textContent = 0
scoreGuestDisplay.textContent = 0

function homeAddOne() {
    homeScore += 1
    scoreHomeDisplay.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    scoreHomeDisplay.textContent = homeScore
}

function homeAddThree() {
    homeScore += 3
    scoreHomeDisplay.textContent = homeScore
}

function guestAddOne() {
    guestScore += 1
    scoreGuestDisplay.textContent = guestScore
}

function guestAddTwo() {
    guestScore += 2
    scoreGuestDisplay.textContent = guestScore
}

function guestAddThree() {
    guestScore += 3
    scoreGuestDisplay.textContent = guestScore
}