let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")

hScore = 0
gScore = 0

function add1h() {
    hScore = hScore + 1
    
    homeScore.innerText = hScore
}
function add2h() {
    hScore = hScore + 2
    
    homeScore.innerText = hScore
}
function add3h() {
    hScore = hScore + 3
    
    homeScore.innerText = hScore
}

function add1g() {
    gScore = gScore + 1
    
    guestScore.innerText = gScore
}
function add2g() {
    gScore = gScore + 2
    
    guestScore.innerText = gScore
}
function add3g() {
    gScore = gScore + 3
    
    guestScore.innerText = gScore
}