// variables

let ans1 = [];
let ans2 = [];
let ans3 = [];
let fnlRslt = [];
let countA = 0;
let countB = 0;
let countC = 0;
let tecRslt= [0];
let tec = 0;

btnA1.onclick = () => { ans1 = ["a"] }

btnB1.onclick = () => { ans1 = ["b"] }

btnC1.onclick = () => { ans1 = ["c"] }

// border images question 2
myImgA2.onclick = function () {
    myImgA2.style.border = "thick solid #848484";
    myImgB2.style.border = 0;
    myImgC2.style.border = 0;
    ans2 = ["a"];
}
myImgB2.onclick = function () {
    myImgB2.style.border = "thick solid #848484";
    myImgA2.style.border = 0;
    myImgC2.style.border = 0;
    ans2 = ["b"];
}
myImgC2.onclick = function () {
    myImgC2.style.border = "thick solid #848484";
    myImgA2.style.border = 0;
    myImgB2.style.border = 0;
    ans2 = ["c"];
}

// border images question 3
myImgA3.onclick = function () {
    myImgA3.style.border = "thick solid #848484";
    myImgC3.style.border = 0;
    myImgB3.style.border = 0;
    ans3 = ["a"];
}

myImgB3.onclick = function () {
    myImgB3.style.border = "thick solid #848484";
    myImgA3.style.border = 0;
    myImgC3.style.border = 0;
    ans3 = ["b"];
}

myImgC3.onclick = function () {
    myImgC3.style.border = "thick solid #848484";
    myImgA3.style.border = 0;
    myImgB3.style.border = 0;
    ans3 = ["c"];
}

btnRslt.onclick = () => {
    fnlRslt = ans1.concat(ans2, ans3)
    //window.alert(fnlRslt)
    console.log(fnlRslt);
    for(i=0; i<fnlRslt.length; i++){
        if(fnlRslt[i] == "a"){
            countA = countA + 1;
        } else if(fnlRslt[i] =="b"){
            countB = countB + 1;
        } else { 
            countC = countC + 1;
        }
    } 
    console.log(countA);
    console.log(countB);
    console.log(countC);
    if(countA == 0 && countB == 0 && countC == 0 ){
        tec= 4;
    } else {
            if(countA == countB){
                if(countA == countC){
                    console.log("dificil desicion tienes")
                } else if (countC > countA){
                    console.log("Node")
                    tec = 3;
                } else {
                    console.log("dificil desicion tienes")
                }
            } else if(countA > countB){
                if(countA > countC){
                    console.log("Angular")
                    tec = 1;
                } else if (countA == countC) {
                    console.log("dificil desicion tienes")
                } else {
                    console.log("Node")
                    tec = 3;
                }
            } else {
                if(countB > countC){
                    console.log("React it is")
                    tec = 2
                } else if (countB == countC) {
                    console.log("dificil desicion tienes")
                    console.log("Node")
                } else {
                    console.log("Node")
                    tec = 3
                }
            }
        }
    
    switch(tec) {
        case 0:
            document.getElementById("txt").innerHTML = "Difficult decision you have";
            rslTec();
            break;
        case 1:
            document.getElementById("txt").innerHTML = "Angular is for you!!";
            document.getElementById("linkTo").innerHTML = "Angular";
            y = document.getElementById("linkTo");
            y.href = "./angular.html";
            y.style.display = "block";
            rslTec();
            break;
        case 2:
            document.getElementById("txt").innerHTML = "React you had choosen!!";
            document.getElementById("linkTo").innerHTML = "React";
            y = document.getElementById("linkTo");
            y.href = "./react.html";
            y.style.display = "block";
            rslTec();
            break;
        case 3:
            document.getElementById("txt").innerHTML = "Node it is!!";
            document.getElementById("linkTo").innerHTML = "Node";
            y = document.getElementById("linkTo");
            y.href = "./node.html";
            y.style.display = "block";
            rslTec();
            break; 
        case 4:
            document.getElementById("txt").innerHTML = "You have to answer the questions.";
            y = document.getElementById("linkTo");
            y.href = "./angular.html"
            y.style.display = "none"
            rslTec();
            break; 
    }

    countA = countB = countC = 0;

}

function rslTec() {
    var x = document.getElementById("resultado");
    if(x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

