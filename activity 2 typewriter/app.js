

let inp=document.querySelector('#text');
let heading=document.querySelector('#type');

inp.addEventListener("input",function(e){
let text=console.log(inp.value);

heading.innerText= inp.value;
})
