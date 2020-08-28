function addNoteToHtml(noteText) {
  //Find UL
  const list = document.getElementById("list");
  //Create LI
  const listItem = document.createElement("li");
  //Insert LI into UL
  list.appendChild(listItem);
  //Create a element
  const anchor = document.createElement("a");
  //Insert a element into LI
  listItem.appendChild(anchor);
  //Create h2 element
  const header = document.createElement("h2");
  //Insert h2 element into LI
  anchor.appendChild(header);
  //Insert a note into h2 element

  header.innerHTML = noteText;

  console.log(noteText);
}

window.onload = function () {
  fetch("http://localhost:7787/notes")
    .then((r) => r.json())
    .then((result) => {
      for (const note of result) {
        addNoteToHtml(note.name);
      }
      var textInput;
      var button = document.getElementById("add");
      button.onclick = function () {
        textInput = document.getElementById("text").value;
        document.getElementById("text").value = "";
        addNoteToHtml(textInput);

        fetch("http://localhost:7787/notes", {
          method: "POST",
          body: JSON.stringify({ name: textInput }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      };
    });
};
