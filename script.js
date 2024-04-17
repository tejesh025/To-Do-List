
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
        })
