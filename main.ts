const submit: HTMLButtonElement = document.getElementById("btnSubmit") as HTMLButtonElement;
const ansA1: HTMLInputElement = document.getElementById("btnA1") as HTMLInputElement;
const ansB1: HTMLInputElement = document.getElementById("btnB1") as HTMLInputElement;
const ansC1: HTMLInputElement = document.getElementById("btnC1") as HTMLInputElement;

let arrayAns = [];

submit.onclick = () => {location.href="./index.html"}

ansA1.onclick = () => {
    arrayAns = ["a"]
    console.log(arrayAns);
    window.alert(arrayAns);
}

ansB1.onclick = () => {
    arrayAns = ["b"]
    console.log(arrayAns);
    window.alert(arrayAns);
}

ansC1.onclick = () => {
    arrayAns = ["c"]
    console.log(arrayAns);
    window.alert(arrayAns);
}