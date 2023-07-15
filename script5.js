var ob=0;
var i=0;
document.querySelector("html").addEventListener("click",function(){
    ob++;
    var colors=['yellow','pink','orange','grey'];
    document.querySelector("p").innerHTML = "You have clicked body "+ob+" times";
    document.querySelector("body").style.backgroundColor=colors[i];
    i=(i+1)%colors.length;
});