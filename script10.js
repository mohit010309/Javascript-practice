document.addEventListener("keydown",function(event){
    var key=event.key;
    key=key.toUpperCase();
    var s="btn"+key;
    if(key=="A" || key=="S" || key=="D" || key=="F")
    document.querySelector("."+s).style.backgroundColor="yellow";
    if(key=="ENTER")
    {
        var ob2=document.querySelector(".para");
        ob2.innerHTML += "<br>";
    }
    /* Adding backspace function */
    if(key=="BACKSPACE")
    {
        var s=document.querySelector(".para").innerHTML;
        if(s.length!=0)
        {
            s=s.slice(0,s.length-1);
            document.querySelector(".para").innerHTML=s;
        }
    }

    /* Adding text to paragraph */
    if(key!="BACKSPACE" && key!="ENTER")
    {
        var ob1=document.querySelector(".para").innerHTML;
        if(ob1.length==0)
            document.querySelector(".para").innerHTML=key;
        else 
            document.querySelector(".para").innerHTML+=key;
    }


});
document.addEventListener("keyup",function(event){
    var key=event.key;
    key=key.toUpperCase();
    var s="btn"+key;
    
    if(key=="A" || key=="S" || key=="D" || key=="F")
        document.querySelector("."+s).style.backgroundColor="white";
});