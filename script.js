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
    let coords = this.getBoudingClientRect();

    let  buttonCoords = {
        top: event.clientY - coords.top - coords.clientTop - nixBTN.clientHeight / 2 - 10,
        left: event.clientX - coords.left - coords.clientLeft - nixBTN.clientWidth / 2 - 7
    }
}

// field.onclick = function(event){
//     //window-relative filed coordinttes 
//     let fieldCoords = this.getBoundingClientRect();

//     // the ball has poistion: absoulte, the field: position: relative
//     // so ball coordiates are relatvie to the field's inner left-upper corner
//     let ballCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10,
//         left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 7
//     }

//     // prevent top boundary crossing
//     if(ballCoords.top < 0){ballCoords.top = 0;}

//     // prevent left boundary crossing
//     if(ballCoords.left < 0){ballCoords.left = 0;}

//     // prevent bottom boundary crossing
//     if(ballCoords.top + ball.clientHeight > field.clientHeight){ballCoords.top = field.clientHeight - ball.clientHeight;}

//     // prevent rigth boundary crossing
//     if(ballCoords.left + ball.clientWidth > field.clientWidth){ballCoords.left = field.clientWidth - ball.clientWidth;}

//     ball.style.left = ballCoords.left + 'px';
//     ball.style.top = ballCoords.top + 'px';

// }