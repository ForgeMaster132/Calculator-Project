// Functions

function add(num1,num2){
    let answer = parseInt(num1) + parseInt(num2);
    return answer;
}

function subtract(num1,num2){
    let answer = parseInt(num1) - parseInt(num2);
    return answer;
}

function multiply(num1,num2){
    let answer = parseInt(num1) * parseInt(num2);
    return answer;
}

function divide(num1,num2){
    let answer = parseInt(num1) / parseInt(num2);
    return answer;
}

function firstNumBig(numberSize,problem,i){
    let size = 0;
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
    return size;
}

function nextNumBigCheck(problem,i){
    let count = 0;
    let k = 1;
    for(let j = 0;j < problem.length - (i + 1); j++){
        if(problem[i + k] != "+" || "-" || "/" || "x")
        count++;
    }
    return count;
}

function nextNumBig(problem,i,count){
    let size = 0;
                let j = count;
                let k = 1;
                while(j > 0){
                    size += problem[i + k];
                    j--;
                    k++;
                }
    return size;
}

function operate(){
    let problem = document.getElementById("display").textContent.split("");
    let answer = 0;
    let numberSize = 0;
    let num2 = 0;
    let size = 0;
    let size2 = 0;
    for(let i = 0;i < problem.length;i++){  
        size = problem[i - 1];
        size2 = problem[i + 1];
        num2 = nextNumBigCheck(problem,i);
       if(problem[i] == "+"){
                size2 = nextNumBig(problem,i,num2);
                size = firstNumBig(numberSize,problem,i);
                    answer += add(size,size2);
                    problem.splice(i + 1,1,answer);
                    numberSize = 0;
        } else if(problem[i] == "-"){
                size2 = nextNumBig(problem,i,num2);
                size = firstNumBig(numberSize,problem,i);
                    answer += subtract(size,size2);
                    problem.splice(i + 1,1,answer);
                    numberSize = 0;
        } else if(problem[i] == "x"){
                size2 = nextNumBig(problem,i,num2);
                size = firstNumBig(numberSize,problem,i);
                    answer += multiply(size,size2);
                    problem.splice(i + 1,1,answer);
                    numberSize = 0;
        } else if(problem[i] == "/"){
                size2 = nextNumBig(problem,i,num2);
                size = firstNumBig(numberSize,problem,i);
                    answer += divide(size,size2);
                    problem.splice(i + 1,1,answer);
                    numberSize = 0;
        }
      numberSize++;
    }
    document.getElementById("display").textContent = answer;
}

// Buttons

for(let i = 0; i < 10; i++){
    document.getElementById(i).addEventListener("click",function(){
        if(document.getElementById("display").textContent.length > 12){
            document.getElementById("display").style.fontSize = "250%";
            document.getElementById("display").style.height = "7%";
        }
        if(document.getElementById("display").textContent.length > 18){
            document.getElementById("display").style.fontSize = "150%";
            document.getElementById("display").style.height = "5%";
        }
        if(document.getElementById("display").textContent == "Calculator"){
            document.getElementById("display").textContent = i;
        } else
            document.getElementById("display").textContent = document.getElementById("display").textContent + i;
    });
}

let operators= ["+","-","x","/"];
for(let i = 0; operators.length > i; i++){
    document.getElementById(operators[i]).addEventListener("click",function(){
        if(document.getElementById("display").textContent.length > 12){
            document.getElementById("display").style.fontSize = "250%";
            document.getElementById("display").style.height = "7%";
        }
        if(document.getElementById("display").textContent.length > 18){
            document.getElementById("display").style.fontSize = "150%";
            document.getElementById("display").style.height = "5%";
        }
        if(document.getElementById("display").textContent == "Calculator")
            document.getElementById("display").textContent = "";
        document.getElementById("display").textContent = document.getElementById("display").textContent + operators[i];
    });
}

document.getElementById("=").addEventListener("click",operate);

    document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("display").style.fontSize = "300%";
    document.getElementById("display").style.height = "10%";
    document.getElementById("display").textContent = "Calculator";
});

