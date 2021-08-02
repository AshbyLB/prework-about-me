
document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "200px"
    document.getElementById("box").style.width = "200px"
    document.getElementById("button1").textContent = "Grow"

});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "Blue"
});
    
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.7"
});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px"
    document.getElementById("hulk").style.visibility="visible"
});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "Black"
});
    document.getElementById("button6").addEventListener("click", function(){
        document.getElementById("box").style.height = "500px"
        document.getElementById("box").style.width = "500px"
        document.getElementById("box").style.backgroundColor = "green"
        document.getElementById("button1").textContent = "Shrink"

});
document.getElementById("button7").addEventListener("click", function(){
    document.getElementById("box").style.borderRadius = "50%"
});



        





