var openBtn = document.querySelector("#openBtn");
var modalContainer = document.querySelector("#modal-container");
var modal = document.getElementById("modal");
var xBtn = document.querySelector("#xBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function(){
    modalContainer.classList.remove("hide");
    modal.classList.remove("hide");

});

 xBtn.addEventListener("click", function(){
    modalContainer.classList.add("hide");
 });

 closeBtn.addEventListener("click", function(){
    modalContainer.classList.add("hide");
 });

 modalContainer.addEventListener("click", function(e){
    if(e.target == e.currentTarget) {
        modalContainer.classList.add("hide");
    }
 });
