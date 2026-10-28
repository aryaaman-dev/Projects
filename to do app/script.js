const input =document.querySelector("input");
const text=document.querySelector("#tasks");
const add=document.querySelector("#add");

add.addEventListener("click",todo)
addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        e.preventDefault();
        todo()
    }
})

function todo(){
    if(input.value.length==0){
        alert("Enter a task");
    }
    else{
        text.innerHTML
        +=
        
        `<div class="task">
        <span id="task">
        ${input.value};
        </span>
        <button class="delete"><i class="fa-solid fa-trash" style="color: rgb(177, 151, 252);"></i></button>

        </div>`

        let current_tasks=document.querySelectorAll(".delete");
     for(let i=0;i<current_tasks.length;i++){
            current_tasks[i].addEventListener("click",function(){
                this.parentNode.remove();
            })
            
        }

        let tasks=document.querySelectorAll(".task")
        for(let i=0;i<tasks.length;i++){
            tasks[i].addEventListener("click",function(){
                this.classList.toggle("completed");
            })
        }

        input.value="";
    }
}