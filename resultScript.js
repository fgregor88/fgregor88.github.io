getCounter();

function getCounter() {
    let counter1 = parseInt(localStorage.getItem('counter1'));
    let counter2 = parseInt(localStorage.getItem('counter2'));
    let counter3 = parseInt(localStorage.getItem('counter3'));

    document.getElementById("test1").innerText = counter1.toString();
    document.getElementById("test2").innerText = counter2.toString();
    document.getElementById("test3").innerText = counter3.toString();
}