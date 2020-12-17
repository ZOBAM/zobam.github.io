var btn = document.getElementById('btn');
var randomNums = [];
btn.addEventListener('click',bg_color);
function bg_color(){
    let colors = ['red', 'blue', 'white', 'gold', 'silver'];
    document.getElementById('bg').style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    document.getElementById('bg').style.color=colors[Math.floor(Math.random()*colors.length) - 1];
    document.getElementById('text').innerHTML = "Changed By JavaScript";
    /* console.log('text color is: '+ colors[Math.floor(Math.random()*colors.length) - 1]);
    console.log(Math.floor(Math.random()*colors.length)); */
    getRandomRange(5,10);
    console.log("Logging number between 5 and 10:"+ randomNums);
}

//guess number game

function getRandomRange(lowerNum, higherNum){
    let num = Math.floor(Math.random() * (higherNum - lowerNum) + lowerNum);
    if(!randomNums.includes(num)){
        randomNums.push(num);
    }
    return num;
}
var correct = false, answer, result = getRandomRange(1,100),tryCount = 0;
do{
    let msg = ';'
    if(tryCount == 0){
        msg = "I am thinking of a number between 1 and 100. Try Guess It!: ";
    }
    else{
        if(answer>result)
        msg = "The number is lower. Try Again!: ";
        else
        msg = "The number is higher. Try Again!: ";
    }
    answer = +prompt(msg);
    tryCount++;
    if(answer == result){
        correct = true;
        alert(`You Got it right in ${tryCount} attempts`);
    }
}while(correct == false);    
//end guess game

setInterval(bg_color,2500);
var person = {name: "CJ", age: 34, gender: "male"};
var person2 = {name: "Donzoby", age: 24, gender: "male"};
var scores = [50, 60, 70, 40, 55, 100];
if(scores.includes(50)){
    console.log("50 is part of the array");
}
console.log(person2.name);

//calculator
var num1 = prompt("Enter your first number:");
var num2 = prompt("Enter your second number:");
var operation = prompt("Which operation? (+, -, *)");
calc(num1, num2,operation);
function calc(x, y, z){
    if(z == "+"){
        return (alert("The result of your calculation is = "+(+x + +y)));
    }
    else if(z == "-"){
        return (alert("The result of your calculation is = "+(+x - +y)));
    }
    else if(z == "*"){
        return (alert(x * y));
    }
    else{
        return(alert("Oga, wetin na?"))
    }
}

for(i = 0; i<scores.length; i++){
    console.log(scores[i]);
}