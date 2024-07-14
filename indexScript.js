console.log("Hello world");

localStorage.setItem(`counter1`, 0);
localStorage.setItem(`counter2`, 0);
localStorage.setItem(`counter3`, 0);

function zacni() {
    window.location.href = "questions.html";
    resetCounters();
}
