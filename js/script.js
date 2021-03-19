document.addEventListener("keydown", handleKeydown);

var mainContent = document.querySelector("#main-content");

var eventKey = document.querySelector(".event-key .item__content");
var eventLocation = document.querySelector(".event-location .item__content");
var eventWhich = document.querySelector(".event-which .item__content");
var eventCode = document.querySelector(".event-code .item__content");

function handleKeydown(event){
    mainContent.textContent = event.keyCode;
    eventKey.textContent = event.key;
    eventLocation.textContent = event.location;
    eventWhich.textContent = event.which;
    eventCode.textContent = event.code;
    console.log(event);
}