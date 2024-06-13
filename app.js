function saveTask(){
console.log("Saving tasks");
}

function init(){
    console.log("task manager");

    //lload data

    //hook the events
    $("#btnSave").click(saveTask);
}
window.onload=init;