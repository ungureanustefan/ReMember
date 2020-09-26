export function getNotes() {
  return fetch("http://localhost:7787/notes") // Promise<string>, "[{ "name": "N1" }, { "name": "N2" }]"
    .then((r) => r.json()); // Promise<object[]>, [{ name: "N1" }, { name: "N2" }]
}

export function addNote(note) {
  return fetch("http://localhost:7787/notes", {
    method: "POST",
    body: JSON.stringify({ name: note }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function deleteNote(noteID) {
  return fetch("http://localhost:7787/notes/" + noteID, {
    method: "DELETE",
  });
}
