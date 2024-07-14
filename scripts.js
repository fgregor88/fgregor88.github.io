let currentPage = 1;

let vprasanja = [
    "",
    "Na potovanju najraje ...",
    "Najraje potujem ...",
    "Najraje potujem z ...",
    "Najraje stanujem v ...",
    "Najraje imam razgled na ...",
    "Najraje si ogledam ...",
    "Najraje jem ...",
    "Najraje pijem ..."
]

let odgovori = [
    ["Raziskujem teorije zarote", "Štejem ovce", "Nabiram olive"],
    ["Jeseni", "Spomladi", "Poleti"],
    ["Ladjo", "Letalom", "Avtodomom"],
    ["Hostlu", "Airbnbju", "Kampu"],
    ["Morje", "Gozd", "Mestne ulice"],
    ["Starodavno arhitekturo", "Fimska prizorišča", "Stare vasi"],
    ["Mečarico", "Ovčetino", "Jajca s feferoni"],
    ["Konjak", "Jabolčni cider", "Sadno vino"],
]

// Initialize counters from localStorage or set to 0
function initializeCounters() {
    for (let i = 1; i <= 3; i++) {
        if (!localStorage.getItem(`counter${i}`)) {
            localStorage.setItem(`counter${i}`, 0);
        }
        document.getElementById(`counter${i}`).innerText = localStorage.getItem(`counter${i}`);
    }
}

// Reset counters on page reload
function resetCounters() {
    localStorage.setItem(`counter1`, 0);
    localStorage.setItem(`counter2`, 0);
    localStorage.setItem(`counter3`, 0);

    document.getElementById(`counter1`).innerText = 0;
    document.getElementById(`counter2`).innerText = 0;
    document.getElementById(`counter3`).innerText = 0;
}

// Increment counter and update the page content
function incrementCounter(counter) {
    let count = parseInt(localStorage.getItem(`counter${counter}`)) || 0;
    count++;
    localStorage.setItem(`counter${counter}`, count);
    document.getElementById(`counter${counter}`).innerText = count;
    currentPage++;

    if (currentPage > 8) {
        window.location.href = "resultPage.html";
    }

    if (currentPage > 8) currentPage = 1;
    updatePageContent();
}

// Update the page content based on the current page
function updatePageContent() {
    document.getElementById('page-title').innerText = vprasanja[currentPage];

    let images = [
        ['slike\\1-1.jpg', "slike\\1-2.jpg", "slike\\1-3.jpg"],
        ["slike\\2-1.jpg", "slike\\2-2.jpg", "slike\\2-3.jpg"],
        ["slike\\3-1.jpg", "slike\\3-2.jpg", "slike\\3-3.webp"],
        ["slike\\4-1.jpg", "slike\\4-2.webp", "slike\\4-3.jpg"],
        ["slike\\5-1.jpg", "slike\\5-2.jpg", "slike\\5-3.jpg"],
        ["slike\\6-1.jpg", "slike\\6-2.jpg", "slike\\6-3.jpg"],
        ["slike\\7-1.jpg", "slike\\7-2.jpg", "slike\\7-3.jpg"],
        ["slike\\8-1.webp", "slike\\8-2.jpg", "slike\\8-3.webp"],
    ];

    let imgElements = document.querySelectorAll('.orange-div img');
    imgElements.forEach((img, index) => {
        img.src = images[currentPage - 1][index];
    });

    let odgovorElement = document.querySelectorAll('.odgovor');
    odgovorElement.forEach((txt, index) => {
        txt.innerHTML = odgovori[currentPage - 1][index];
    });
}

resetCounters();

// Initialize the first page
updatePageContent();

//window.onload = initializeCounters;
//window.onreload = resetCounters;

function zacni() {
    window.location.href = "questions.html";
    resetCounters();
}