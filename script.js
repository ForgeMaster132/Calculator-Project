// Functions

// Math Functions

function add(num1,num2){
    let answer = parseInt(num1) + parseInt(num2);
    return answer;
}

function subtract(num1,num2){
    let answer = num1 - num2;
    return answer;
}

function multiply(num1,num2){
    let answer = num1 * num2;
    return answer;
}

function divide(num1,num2){
    let answer = num1 / num2;
    return answer;
}

function operate(){
    let problem = document.getElementById("display").textContent.split("");
    let answer = 0;
    let numberSize = 0;
    for(let i = 0;i < problem.length;i++){
       if(problem[i] == "+"){
            if(numberSize > 1){
                let size = 0;
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
                answer = add(size,problem[i + 1])
            }else
                answer = add(problem[i - 1],problem[i + 1]);
                problem.splice(i+1,1,answer);
        }else if (problem[i] == "-"){
            if(numberSize > 1){
                let size = 0;
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
                answer = subtract(size,problem[i + 1])
            }else
            answer = subtract(problem[i - 1],problem[i + 1]);
            problem.splice(i+1,1,answer);
        } else if (problem[i] == "x"){
            if(numberSize > 1){
                let size = 0;
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
                answer = multiply(size,problem[i + 1])
            }else
            answer = multiply(problem[i - 1],problem[i + 1]);
            problem.splice(i+1,1,answer);
        } else if (problem[i] == "/"){
            if(numberSize > 1){
                let size = 0;
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
                answer = divide(size,problem[i + 1])
            }else
            answer = divide(problem[i - 1],problem[i + 1]);
            problem.splice(i+1,1,answer);
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

document.getElementById("+").addEventListener("click",function(){
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
    document.getElementById("display").textContent = document.getElementById("display").textContent + "+";
});

document.getElementById("-").addEventListener("click",function(){
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
    document.getElementById("display").textContent = document.getElementById("display").textContent + "-";
});

document.getElementById("*").addEventListener("click",function(){
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
    document.getElementById("display").textContent = document.getElementById("display").textContent + "x";
});

document.getElementById("/").addEventListener("click",function(){
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
    document.getElementById("display").textContent = document.getElementById("display").textContent + "/";
});

document.getElementById("=").addEventListener("click",operate);

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("display").style.fontSize = "300%";
    document.getElementById("display").style.height = "10%";
    document.getElementById("display").textContent = "Calculator";
});