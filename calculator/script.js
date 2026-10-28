let input=document.querySelector('input')
let button=document.querySelectorAll('button')
let string="";

button.forEach(button=>{
    button.addEventListener("click",function(e){
     
        if(e.target.innerText=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerText=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerText=="DEL"){
            string=string.toString().slice(0,-1);
            input.value=string;
        }
        else{
            string+=e.target.innerText;
            input.value=string;
        }
    })
})