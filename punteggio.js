function incrementScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.innerText);
    score++;
    scoreElement.innerText = score;
}

function decrementScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.innerText);
    if (score > 0) {
        score--;
    }
    scoreElement.innerText = score;
}

function resetScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    scoreElement.innerText = 0;
}
