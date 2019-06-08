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
    let size = "";
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
    return size;
}

function nextNumBigCheck(problem,i){
    let count = 0;
    let k = i + 1;
    for(let j = k ;j < problem.length; j++){
        if((problem[j] == "+") || (problem[j] == "-") || (problem[j] == "/") || (problem[j] == "x")){
            return count;
        }
        count++;
    }
    return count;
}

function nextNumBig(problem,i,count){
    let size = "";
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
    let num2 = 0;
    let size2 = 0;
    let num1 = nextNumBigCheck(problem,-1);
    let size = nextNumBig(problem,-1,num1);
    console.log(size);
    answer = size;
    for(let i = 0;i < problem.length;i++){
         console.log("problem[i] " + problem[i]);
       if(problem[i] == "+"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = add(answer,size2);
                console.log("ans  " + answer);
                    numberSize = 0;
        } else if(problem[i] == "-"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = subtract(answer,size2);
                    numberSize = 0;
        } else if(problem[i] == "x"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = multiply(answer,size2);
                    numberSize = 0;
        } else if(problem[i] == "/"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = divide(answer,size2);
                    numberSize = 0;
        }
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

