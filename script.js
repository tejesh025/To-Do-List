
        const addtask1 = document.querySelector("#addtask");
        const inptask1 = document.querySelector("#inptask");
        const tasks = document.querySelector(".tasks");
        inptask1.focus();
    
        addtask1.addEventListener('click',function(e){
            e.preventDefault();
            const task = inptask1.value.charAt(0).toUpperCase() + inptask1.value.substring(1);

            if (!task){
                alert("enter task");
            }
            else{
                console.log('success');
                console.log(task);
        
            const taskdiv = document.createElement("div");
            taskdiv.classList.add('tasks');
            
            const taskcontent = document.createElement('div');
            taskcontent.classList.add("taskl");
            
            taskdiv.appendChild(taskcontent);
            tasks.appendChild(taskdiv);

            const checkbox = document.createElement("input")
            checkbox.type = "checkbox";
            // checkbox.style.backgroundColor = "transparent"; 

            taskcontent.appendChild(checkbox);
            const tasklis= document.createElement("input");
            tasklis.classList.add("tasklist");
            taskcontent.appendChild(tasklis);
            tasklis.type = "text";  
            tasklis.value= task;
            tasklis.setAttribute("readonly","readonly");
        
            const actiondiv= document.createElement("div");
            actiondiv.classList.add("actions");
            taskcontent.appendChild(actiondiv)

            const edit = document.createElement("button");
            edit.id="edit";
            edit.innerText="✏️";
            actiondiv.appendChild(edit);

            const delete1 = document.createElement("button");
            delete1.id="delete";
            delete1.innerText="🗑️";
            actiondiv.appendChild(delete1);
            inptask1.value="";

            edit.addEventListener("click" , function(){
                if (this.innerText == '✏️' ){
                    this.innerText = '✔️';
                    tasklis.removeAttribute('readonly');
                    tasklis.focus();
                }
                else 
                {  actiondiv.style.width = "70px";
                    this.innerText = 'saving';
                    tasklis.setAttribute("readonly",'readonly');
                setTimeout(() => {
                    actiondiv.style.width="";
                    this.innerText = '✏️';
                }, 1000); } 
                
            })
            delete1.addEventListener("click" , function(){
                tasks.removeChild(taskdiv);
            })
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    tasklis.classList.add("ct");
                } else {
                    tasklis.classList.remove("ct");
                }
           
                
            });
           
                
                
        } 
        });
            // const mode = document.querySelector("#mode");
            // const elementstocheck = document.querySelectorAll('h2,p,div,input');
            
            // mode.addEventListener('click' ,()=>{
                
            //     const bodcol = window.getComputedStyle(document.body).backgroundColor;
                

            //     elementstocheck.forEach(element=>{
                    
            //         const computedstyle = window.getComputedStyle(element);
            //         const color = computedstyle.color;
            //         const bcolor = computedstyle.borderColor;
                    
            //         console.log("Element color:", bcolor); 
                    
            //         if (bcolor== 'rgb(255, 255, 255)') 
            //         {
            //         element.style.borderColor='black';}
            //         else if (bcolor== 'rgb(0, 0, 0)')
            //         {
            //             element.style.borderColor='white';  
            //         }
            //         // else if(bcolor =='rgb(64, 9, 119)'){
            //         //     element.style.borderColor='black';
            //         // }
                    

            //         if(color == 'rgb(255, 255, 255)'){
            //             element.style.color='rgb(0, 0, 0)';

            //         }   
            //         else if (color=='rgb(0, 0, 0)'){
            //             element.style.color='rgb(255, 255, 255)'
            //         }        
            //         console.log(bodcol)
                    
                   
                    
            //     })
            // //    const tasklistElement = document.querySelector(".tasklist");
            // //     if (tasklistElement) {
            // //         const tasklistcol = window.getComputedStyle(tasklistElement).color;
            // //         if (tasklistcol === "rgb(255, 255, 255)") {
            // //             // Change color of tasklist
            // //             // For example:
            // //             tasklistElement.style.color = 'black';
            // //         }
            // //     }

            //     if (bodcol === 'rgb(224, 235, 201)') {
            //         document.body.style.backgroundColor = 'black';
                 
            //     } else if (bodcol === 'rgb(0, 0, 0)') {
            //         document.body.style.backgroundColor = 'rgb(224, 235, 201)';
                   
            //     }
            // })
// Add this section inside the event listener for mode click
// Add this section inside the event listener for mode click
const mode = document.querySelector("#mode");
const elementstocheck = document.querySelectorAll('h2,p,div,input');


mode.addEventListener('click', () => {
    
    const bodcol = window.getComputedStyle(document.body).backgroundColor;

    elementstocheck.forEach(element => {
        const computedstyle = window.getComputedStyle(element);
        const color = computedstyle.color;
        const bcolor = computedstyle.borderColor;

        if (bcolor === 'rgb(255, 255, 255)') {
            element.style.borderColor = 'black';
        } else if (bcolor === 'rgb(0, 0, 0)') {
            element.style.borderColor = 'white';
        }

        if (color === 'rgb(255, 255, 255)') {
            element.style.color = 'rgb(0, 0, 0)';
        } else if (color === 'rgb(0, 0, 0)') {
            element.style.color = 'rgb(255, 255, 255)';
        }
    });

    // Access tasklistElements and set its color
    const tasklistElements = document.querySelectorAll(".tasklist");
    tasklistElements.forEach(tasklistElement => {
        if (bodcol === 'rgb(224, 235, 201)') {
            tasklistElement.style.color = 'white';
        } else if (bodcol === 'rgb(0, 0, 0)') {
            tasklistElement.style.color = 'black';
        }
    });

    // Toggle background color of the body
    if (bodcol === 'rgb(0, 0, 0)') {
        mode.textContent ="dark";
        mode.style.color ="white";
        mode.style.backgroundColor='black' 
        document.body.style.backgroundColor = 'rgb(224, 235, 201)';
    } else {
        mode.textContent ="light";
        mode.style.color ="black";
        mode.style.backgroundColor='white' 
        document.body.style.backgroundColor = 'black';
    }
});
