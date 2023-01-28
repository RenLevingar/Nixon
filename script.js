// on load
function loader(){nixBTN.style.transition ="0s";alert("This is a secure browser do not share any information with other people.");}

// on mouse move
function correct(){richard.style.width = "200px";richard.style.height = "100px";richard.style.fontSize = "40px";}
function correctReset(){richard.style.width = "100px";richard.style.height = "50px";richard.style.fontSize = "20px";}

// on click
function submitter(){
    alert("Thank you for your info, please leave the site");
    richard.disabled = true;
}

// context menu
function context(){document.addEventListener("contextmenu", (e) => {e.preventDefault()});}

// on mouse enter and leave
function noClick(){hubert.style.cursor = "none"; hubert.disabled = true;}
function cursorReset(){hubert.style.cursor = "pointer";}

// X and Y position
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
    const buttons = document.getElementById('buttons');
    for (let i = 0; i < 10; i++) {
            const btn = document.createElement('button');
            btn.style.background = "black";
            btn.style.color = "white";
            btn.style.fontSize = "15px";
            btn.style.border = "1px solid black";
            btn.style.width = "120px";
            btn.innerHTML = "WRONG CHOICE"
            buttons.appendChild(btn);
        }
    }

// event listeners
function buttonScale(){nixBTN.style.width = "60px";}
let worker = document.createElement("button");
worker.innerHTML = "Any suspicious activity wil be reported";
testing.appendChild(worker);
worker.addEventListener("click", tester);
function tester(){worker.removeEventListener("click" , tester);console.log("event listener removed");};