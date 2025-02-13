// alert("connected");


// example 1
document.getElementById("changeTextButton").addEventListener("click", function() {
   let paragraph =  document.getElementById("myParagraph");
   paragraph.textContent = "This paragraph changed..";
});


// example 2:

document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});



// example 3

document.getElementById("changeOrder").addEventListener("click", function () {
    let coffeeOrder = document.getElementById("coffeeOrder");
    coffeeOrder.textContent = "Espresso";
    coffeeOrder.style.backgroundColor = "orange";
    coffeeOrder.style.padding = "20px";
});


// example 4
document.getElementById("addNewItem").addEventListener("click", function () {

    let newItem = document.createElement("li");
    newItem.textContent = "paneer";
document.getElementById("shoppingList").appendChild(newItem);
});



// example 5
document.getElementById("removeLastTask").addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// example 6
document.getElementById("clickMeButton").addEventListener("dblclick", function () {
alert("bhole, meri jaan!");
});


// Example 7

document.getElementById("teaList").addEventListener("click", function (event) {

    if(event.target && event.target.matches(".teaItem")){
        alert("You selected : " + event.target.textContent );
    }
});


// example 8

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`;
});


// example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});


// example 10

document.getElementById("toggleHighlight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});