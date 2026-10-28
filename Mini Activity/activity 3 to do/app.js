let inp=document.querySelector('#text');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener("click",function(e){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add('delete');

    ul.appendChild(item);
    item.appendChild(delBtn)
    console.log(inp.value);
    inp.value=""
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=='BUTTON'){       // event .nodeName= kisne trigger kiya
    let listItem= event.target.parentElement;
    listItem.remove();
    console.log("delted");
    }
    
});


// Becuase of below new del button (which is created )do not take values. and hence we apply property to ul/li


// let delBtns=document.querySelectorAll(".delete");
// for(btn of delBtns){
//     btn.addEventListener("click",function(){
//         let par=this.parentElement;    // parent access hence used navigation.
//         console.log(par);
//         par.remove();
//     })
// }
