function saveTask(){
console.log("Saving tasks");
//get the values from the html
const title=$("#txtTitle").val();
const description=$("#txtDescription").val();
const color=$("#selColor").val();
const date=$("#selDate").val();
const status=$("#selStatus").val();
const budget=$("#numBudget").val();
console.log(title,description,color,date,status,budget);
//build an object
let taskToSave= new Task(title,description,color,date,status,budget);
console.log(taskToSave);
//display the info on the server
displayTask(taskToSave);
//save to the server
$.ajax({
    type:"post",
    url:"http://fsdiapi.azurewebsites.net/api/tasks/",
    //create the logic to define that i want to sendthe tasktosave object
    data: JSON.stringify(taskToSave),
    contentType:"application/json",
    ///////
    success: function(response){
        console.log(response);
    },
    error: function(error){
        console.log(error);
    }
});
}
 function loadTask(){
    $.ajax({
        type:"get",
        url:"http://fsdiapi.azurewebsites.net/api/tasks",
        success:function(response){
            let data=JSON.parse(response);
            console.log(data);
            for(let i=0;i<data.length;i++)
                {
                    let task=data[i];//get every object
                    if(task.name=="moses")
                        {
                            displayTask(task);
                        }
                }
        },
        error:function(error){
            console.log(error);
        }
    })
    //render the messages that come from the user
 }

function displayTask(task){
let syntax= `<div class='task'>

    <div class='info'>
        <h3>${task.title}</h3>
        <h5>${task.description}</h5>
    </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
        <label>${task.date}</label>
        <label>${task.budget}</label>
        </div>      
    </div>
        `
$(".list-task").append(syntax);
//add the rest of the inputs to the syntax
}

function testRequest(){
    $.ajax({
        type:"get",
        url:"http://fsdiapi.azurewebsites.net",
        success:function(response){
            console.log(response);
        },
        error:function(error){
            console.log(error);
        }
    });
}
function init(){
    console.log("task manager");

    //load data
     loadTask();
    //hook the events
    $("#btnSave").click(saveTask);
}
window.onload=init;