// on load
function loader(){
    alert("This is a secure browser do not share any information with other people.")
}

// on mouse move
function correct(){richard.style.width = "200px";richard.style.height = "100px";richard.style.fontSize = "40px";}
function correctReset(){richard.style.width = "100px";richard.style.height = "50px";richard.style.fontSize = "20px";}

// on click
function submitter(){alert("Thank you for your info, please leave the site"); richard.disabled = true; richard.style.cursor = "no-drop";}

// context menu
function context(){document.addEventListener("contextmenu", (e) => {e.preventDefault()});}

// on mouse enter and leave
function noClick(){hubert.style.cursor = "none"; hubert.disabled = true;}
function cursorReset(){hubert.style.cursor = "pointer"}

// moving object
page.onclick = function(event){
    let coords = this.getBoundingClientRect();

    let  buttonCoords = {
        top: event.clientY - coords.top - page.clientTop - nixBTN.clientHeight / 2 - 10,
        left: event.clientX - coords.left - page.clientLeft - nixBTN.clientWidth / 2 - 10
    }

    nixBTN.style.left = buttonCoords.left + 'px';
    nixBTN.style.top = buttonCoords.top + 'px';
}

// for loop
function remake(){
   richard.style.color = "green";
   for(let i=0; i>4; i++){
    
   }
};