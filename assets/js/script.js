

//the current date is displayed above the hour blocks
var currentDate = moment().format("ddd, MMMM Do");
$("#currentDay").text(currentDate)

//when I click on an hour block I can enter text
$(".task-table").on("click", "div", function(event) {
    console.log(event)
    var taskInput = $("<input>")
    .addClass("form-control")
    .text()

    EventTarget.append(taskInput)
})
//when I click the save button the text is saved into the hour block and updated to local storage

//if the hour block is in the past it should be grey, present red, future green


//function to turn div into text area to enter task



//set a time to each hour block by adding a data set of time that adds 1 hour per block
//moment().hour(Number)



//audit function to see if the hour block is past, present, or future and change the background color accordingly