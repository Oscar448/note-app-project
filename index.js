const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();


function updatestorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/download (1).jpg";
    notesContainer.appendChild(inputBox).appendChild(img);
}
)
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updatestorage();
            }

        })
    }
})
document.addEventListener("keydown", event => {
    if (event.key === "enter") {
        document.exeecommand("insertlineBreak");
        event.preventDefault();
    }
})












