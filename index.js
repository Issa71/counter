let count = 0;

document.getElementById("negativeFiveBtn").onclick = function(){
    count-=5;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("negativeOneBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("oneBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("fiveBtn").onclick = function(){
    count+=5;
    document.getElementById("countLabel").innerHTML = count;
}