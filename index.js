
var button=document.querySelector(".button");
button.addEventListener("click",()=>{
    var input1=parseInt(document.querySelector(".input1").value);
    var input2=parseInt(document.querySelector(".input2").value);
    var result=input1+input2;
    document.querySelector(".result").innerHTML=result;
})