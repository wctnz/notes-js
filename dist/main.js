/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var inputElement = document.getElementById("title");
var createBtn = document.getElementById("create");
var listElement = document.getElementById("list");
var notes = [{
  title: "note1",
  completed: false
}, {
  title: "note2",
  completed: false
}, {
  title: "note3",
  completed: false
}, {
  title: "note4",
  completed: true
}];
function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p>Нет заметок</p>";
  }
  for (var i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();
createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  var newNote = {
    title: inputElement.value,
    completed: false
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};
listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    var index = parseInt(event.target.dataset.index);
    var type = event.target.dataset.type;
    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
    render();
  }
};
function getNoteTemplate(note, index) {
  return "<li class=\"list-group-item d-flex justify-content-between align-items-center mb-1\">\n<span class=\"".concat(note.completed ? "text-decoration-line-through" : "", "\">").concat(note.title, "</span>\n<span>\n    <span class=\"btn btn-small btn-").concat(note.completed ? "warning" : "success", "\" data-index=").concat(index, " data-type=\"toggle\">&check;</span>\n    <span class=\"btn btn-small btn-danger\" data-index=").concat(index, " data-type=\"remove\">&times;</span>\n</span>\n</li>");
}
/******/ })()
;
//# sourceMappingURL=main.js.map